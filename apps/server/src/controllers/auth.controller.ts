import prisma from "../db/prismaClient";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import jwt from "jsonwebtoken";

export const authController = asyncHandler(async (req: any, res: any) => {
  let { id, email, name, profilePhoto, provider } = req.body;

  if (!id || !email || !name || !profilePhoto || !provider) {
    throw new apiError(400, "Please provide all required fields");
  }

  if (typeof id !== "string") {
    id = id.toString();
  }

 
  const user = await prisma.user.findUnique({ where: { email } });

  let createdUser;
  if (!user) {
    try {
      const userName = email.split("@")[0];
      createdUser = await prisma.user.create({
        data: {
          id,
          email,
          name,
          profilePhoto,
          provider,
          userName,
        },
      });
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      throw new apiError(500, "Database error while creating user");
    }
  }


  const jwtPayload = {
    id,
    email,
  };

  if (!process.env.JWT_SECRET) {
    throw new apiError(500, "JWT secret is not defined");
  }

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

  const userData = user || createdUser;
  const data = {
    user: userData,
    token: `Bearer ${token}`,
  };

  
  const status = user ? 200 : 201;
  const message = user ? "User already exists" : "User created successfully";

  return res.status(status).json(
    new apiResponse(data, status, message, true)
  );
});