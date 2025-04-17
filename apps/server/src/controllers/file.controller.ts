import { prisma } from "../db/index";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import { Request, Response } from "express";
import { schemas } from "@repo/common/schemas";

import {redis} from "../db/index";
interface User {
    id: string;
    email: string;
    name: string;
    profilePhoto: string;
    provider: string;
    userName: string;
    bio: string;
    createdAt: Date;
  }

  const invalidateUserFileCache = async (userId: string) => {
    const keys = await redis.smembers(`user:${userId}:files:keys`);
    if (keys.length > 0) {
      await redis.del(...keys); // Delete all cache keys
      await redis.del(`user:${userId}:files:keys`); // Clean up the set
    }
  };

  
  declare module "express" {
    interface Request {
      user?: User;
    }
  }

export const createFile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const validateFileSchema = schemas.FileSchema.safeParse(req.body);
    if (!validateFileSchema.success) {
      throw new apiError(400, validateFileSchema.error.errors.map(e => e.message).join(", "));
    }

    const { name, createdByUserId } = validateFileSchema.data;

    if (createdByUserId !== req.user?.id) {
      throw new apiError(403, "User not authorized to create file");
    }

    const file = await prisma.createdFile.create({
      data: {
        name,
        createdByUserId,
        collaborators: {
          create: [{ userId: createdByUserId, role: "ADMIN" }],
        },
      },
    });

   

    if (createdByUserId) {
      invalidateUserFileCache(createdByUserId);
    } else {
      throw new apiError(400, "CreatedByUserId is undefined");
    }

    return res.status(201).json(new apiResponse(file, 201, "File created successfully", true));
  } catch (error) {
    console.error("Error creating file:", error);
    if (error instanceof apiError) {
      throw new apiError(error.status, error.message);
    } else if (error instanceof Error) {
      throw new apiError(500, error.message || "Database error while creating file");
    } else {
      throw new apiError(500, "Unknown error occurred while creating file");
    }
  }
});



export const getFile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const fileId = req.params.fileId;
    const file = await prisma.createdFile.findUnique({
      where: { id: fileId },
      include: { collaborators: true },
    });

    if (!file) throw new apiError(404, "File not found");

    const isCollaborator = file.collaborators.some((c: { userId: string | undefined; }) => c.userId === req.user?.id);
    if (!isCollaborator) throw new apiError(403, "User not authorized to access this file");

    return res.status(200).json(new apiResponse(file, 200, "File fetched successfully", true));
  } catch (error) {
    console.error("Error fetching file:", error);
    if (error instanceof apiError) {
      throw new apiError(error.status, error.message);
    } else if (error instanceof Error) {
      throw new apiError(500, error.message || "Database error while fetching file");
    } else {
      throw new apiError(500, "Unknown error occurred while fetching file");
    }
  }
});

// -- Get all files --
export const getAllFiles = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    if (!userId) throw new apiError(400, "User ID not found in request");

    const cachedKey = `user:${userId}:files:page=${page}:limit=${limit}`;
    const cachedFiles = await redis.get(cachedKey);

    if (cachedFiles) {
      const files = JSON.parse(cachedFiles);
      return res.status(200).json(new apiResponse(files, 200, "Files fetched successfully (from cache)", true));
    }

    const files = await prisma.createdFile.findMany({
      where: { collaborators: { some: { userId } } },
      select: { id: true, name: true, createdAt: true },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit
    });

    if (!files) throw new apiError(404, "No files found for this user");

    
    await redis.set(cachedKey, JSON.stringify(files), "EX", 120);
    await redis.sadd(`user:${userId}:files:keys`, cachedKey); 

    return res.status(200).json(new apiResponse(files, 200, files.length ? "Files fetched successfully" : "No files found", true));
  } catch (error) {
    console.error("Error fetching files:", error);
    if (error instanceof apiError) {
      throw new apiError(error.status, error.message);
    } else {
      throw new apiError(500, "Error occurred while fetching files");
    }
  }
});


// -- Delete file --

export const deleteFile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const fileId = req.params.fileId;
    const createdByUserId = req.user?.id;
    console.log("User ID:", userId);
    console.log("File ID:", fileId);
    if (!userId) throw new apiError(400, "User ID not found in request");
    if (!fileId) throw new apiError(400, "File ID not found in request");

    const file = await prisma.createdFile.findUnique({
      where: { id: fileId },
      include: { collaborators: true },
    });

    if (!file) throw new apiError(404, "File not found");

    const userIsAdmin = file.collaborators.some((c: { userId: string; role: string; }) => c.userId === userId && c.role === "ADMIN");
    if (!userIsAdmin) throw new apiError(403, "User not authorized to delete this file");
    

    const deletedFile = await prisma.createdFile.delete({ where: { id: fileId } });
   
   if (createdByUserId) {
      invalidateUserFileCache(createdByUserId);
    }
    else {
      throw new apiError(400, "CreatedByUserId is undefined");
    }


    return res.status(200).json(new apiResponse(deletedFile, 200, "File deleted successfully", true));
  } catch (error) {
    console.error("Error deleting file:", error);
    if (error instanceof apiError) {
      throw new apiError(error.status, error.message);
    } else if (error instanceof Error) {
      throw new apiError(500, error.message || "Database error while deleting file");
    } else {
      throw new apiError(500, "Unknown error occurred while deleting file");
    }
  }
});
