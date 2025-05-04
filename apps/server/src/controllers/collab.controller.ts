import { prisma } from "../db/index";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import { Request, Response } from "express";
import { schemas } from "@repo/common/schemas";
import { redis } from "../db/index";

//Adding user to collaborator------------------------------------------------------------------------------------------------------------------------------------------------------
    export const addCollabMember = asyncHandler(async (req: any, res: any) => {
    try {
            const { fileId } = req.params;
            const { email, role } = req.body;
            const userId = req.user.id;
            console.log("File ID:", fileId);
            console.log("Email:", email);
            console.log("Role:", role);
        
        //Check file exist and user is admin or not parallelly ------------------------------------------------------------------------------------------------------------------------------------------------
            const [file, isAdmin] = await Promise.all([
                prisma.createdFile.findUnique({ where: { id: fileId } }),
                prisma.collaborator.findFirst({
                where: { fileId, userId, role: "ADMIN" },
                }),
            ]);
        
            if (!file) throw new apiError(404, "File not found");
            if(file.collabMode=== false) throw new apiError(403, "Collab mode is off, cannot add collaborator");
            if (!isAdmin) throw new apiError(403, "User not authorized to add collaborator");
        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        //Find the collaborator user and  check if already a collaborator----------------------------------------------------------------------------------------------------------------------------------
            const collaboratorUser = await prisma.user.findUnique({
            where: { email },
            });
        
            if (!collaboratorUser) throw new apiError(404, "User not found");
        
            const existingCollab = await prisma.collaborator.findFirst({
            where: {
                fileId,
                userId: collaboratorUser.id,
            },
            });
        
            if (existingCollab) throw new apiError(400, "User already a collaborator");
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        // Create new collaborator ----------------------------------------------------------------------------------------------------------------------------------
            const newCollab = await prisma.collaborator.create({
                data: {
                    fileId,
                    userId: collaboratorUser.id,
                    role,
                },
                });
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        if (!newCollab){
            throw new apiError(500, "Failed to add collaborator");
        }
        
        let link  = `${process.env.FRONTEND_URL}/canvas/${fileId}?collabId=${newCollab.id}?role=${role}`;
        
        return res.status(201).json(
            new apiResponse(link, 201, "Collaborator added successfully", true)
        );
    } catch (error) {
        console.error("Error adding collaborator:", error);
        if (error instanceof apiError) {
        throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
        throw new apiError(500, error.message || "Database error while adding collaborator");
        } else {
        throw new apiError(500, "Unknown error occurred while adding collaborator");
        }
    }
    });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Removing user from collaborator------------------------------------------------------------------------------------------------------------------------------------------------------

    export const removeCollabMember = asyncHandler(async (req: any, res: any) => {
        try {
            const { fileId } = req.params;
            const collabId  = req.query.collabId
            const email = req.body.email
            const userId = req.user.id;

            console.log("File ID:", fileId);
            console.log("Email:", email);
            console.log("Collab ID:", collabId);
            console.log("User ID:", userId);
        
        //Check file exist and user is admin or not parallelly ------------------------------------------------------------------------------------------------------------------------------------------------
            const [file, isAdmin] = await Promise.all([
                prisma.createdFile.findUnique({ where: { id: fileId } }),
                prisma.collaborator.findFirst({
                where: { fileId, userId, role: "ADMIN" },
                }),
            ]);
        
            console.log("File:", file);
            console.log("Is Admin:", isAdmin);

            if (!file) throw new apiError(404, "File not found");
            if(file.collabMode=== false) throw new apiError(403, "Collab mode is off, cannot remove collaborator");
            if (!isAdmin) throw new apiError(403, "User not authorized to remove collaborator");
        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        

        //Not to delete if collabID is of admin 

            const collab = await prisma.collaborator.findUnique({
                where: { id: collabId },
            });
        
            if (!collab) throw new apiError(404, "Collaborator not found");
        
            if (collab.role === "ADMIN") {
                return res.status(403).json(
                    new apiResponse(null, 403, "Cannot remove admin collaborator", false)
                );
            }

        //Find the collaborator user ----------------------------------------------------------------------------------------------------------------------------------
            const collaboratorUser = await prisma.user.findUnique({
            where: { email },
            });
        
            if (!collaboratorUser) throw new apiError(404, "User not found");
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        // Remove the collaborator ----------------------------------------------------------------------------------------------------------------------------------
            const removedCollab = await prisma.collaborator.deleteMany({
                where: {
                    fileId,
                    userId: collaboratorUser.id,
                    id: collabId,
                },
            });

        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        if (removedCollab.count === 0) throw new apiError(404, "Collaborator not found");

        return res.status(200).json(
            new apiResponse(null, 200, "Collaborator removed successfully", true)
        );

    } catch (error) {
        console.error("Error removing collaborator:", error);
        if (error instanceof apiError) {
        throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
        throw new apiError(500, error.message || "Database error while removing collaborator");
        } else {
        throw new apiError(500, "Unknown error occurred while removing collaborator");
        }
    }
    });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Update user role from collaborator------------------------------------------------------------------------------------------------------------------------------------------------------
    export const updateCollabMember = asyncHandler(async (req: any, res: any) => {
        try {
            const { fileId } = req.params;
            const { email, role } = req.body;
            const collabId = req.query.collabId;
            const userId = req.user.id;
        
        //Check file exist and user is admin or not parallelly ------------------------------------------------------------------------------------------------------------------------------------------------
            const [file, isAdmin] = await Promise.all([
                prisma.createdFile.findUnique({ where: { id: fileId } }),
                prisma.collaborator.findFirst({
                where: { fileId, userId, role: "ADMIN" },
                }),
            ]);
        
            if (!file) throw new apiError(404, "File not found");
            if(file.collabMode=== false) throw new apiError(403, "Collab mode is off, cannot update collaborator role");
            if (!isAdmin) throw new apiError(403, "User not authorized to update collaborator role");
        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        //Find the collaborator user ----------------------------------------------------------------------------------------------------------------------------------
            const collaboratorUser = await prisma.user.findUnique({
            where: { email },
            });
        
            if (!collaboratorUser) throw new apiError(404, "User not found");
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        

        //IF collobarater is admin cannot change role to other than admin----------------------------------------------------------------------------------------------------------------------------------
        const collab = await prisma.collaborator.findUnique({
            where: { id: collabId },
        });
        if (!collab) throw new apiError(404, "Collaborator not found");

        if(collab.role === "ADMIN" && role !== "ADMIN"){
            return res.status(403).json(
                new apiResponse(null, 403, "Cannot change admin collaborator role", false)
            );
        }

        // Update the collaborator role ----------------------------------------------------------------------------------------------------------------------------------
            const updatedCollab = await prisma.collaborator.updateMany({
                where: {
                    fileId,
                    userId: collaboratorUser.id,
                    id: collabId,
                },
                data: {
                    role,
                },
            });

        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        console.log("FROnTEND URL", process.env.FRONTEND_URL);
        if (updatedCollab.count === 0) throw new apiError(404, "Collaborator not found");
        const link = `${process.env.FRONTEND_URL}/canvas/${fileId}?collabId=${collabId}?role=${role}`;

        return res.status(200).json(
            new apiResponse(link, 200, "Collaborator role updated successfully", true)
        );

    } catch (error) {
        console.error("Error updating collaborator role:", error);
        if (error instanceof apiError) {
        throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
        throw new apiError(500, error.message || "Database error while updating collaborator role");
        } else {
        throw new apiError(500, "Unknown error occurred while updating collaborator role");
        }
    }
    });
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Get all collab member------------------------------------------------------------------------------------------------------------------------------------------------------
    export const getAllCollabMember = asyncHandler(async (req: any, res: any) => {
        try {
            const { fileId } = req.params;
            const userId = req.user.id;
            const fileData= await prisma.createdFile.findUnique({
                where: { id: fileId },
            });


        
        // Get all collaborators for the file ----------------------------------------------------------------------------------------------------------------------------------
            const collabs = await prisma.collaborator.findMany({
                where: { fileId },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            profilePhoto: true,
                        },
                    },
                },
            })

        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        return res.status(200).json(
            new apiResponse(collabs, 200, "Collaborators fetched successfully", true)
        );

    } catch (error) {
        console.error("Error fetching collaborators:", error);
        if (error instanceof apiError) {
        throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
        throw new apiError(500, error.message || "Database error while fetching collaborators");
        } else {
        throw new apiError(500, "Unknown error occurred while fetching collaborators");
        }
    }
    });
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const isCollabarator = asyncHandler(async (req: any, res: any) => { 

    try {
        const { fileId } = req.params;
        const userId = req.user.id;
        const collab = await prisma.collaborator.findFirst({
            where: {
                fileId,
                userId,
            },
        });

        if (!collab) {
            return res.status(403).json(
                new apiResponse(null, 403, "User is not a collaborator", false)
            );
        }

        

        return res.status(200).json(
            new apiResponse(collab, 200, "User is a collaborator", true)
        );

    } catch (error) {
        console.error("Error checking collaborator status:", error);
        if (error instanceof apiError) {
            throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
            throw new apiError(500, error.message || "Database error while checking collaborator status");
        } else {
            throw new apiError(500, "Unknown error occurred while checking collaborator status");
        }
    }
}   
);