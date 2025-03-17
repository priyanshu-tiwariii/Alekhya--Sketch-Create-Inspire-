import prisma from "../db/prismaClient";
import jwt from "jsonwebtoken";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";

export const authController = asyncHandler(async (req: any, res: any) => {
  let {id,email, name, profilePhoto, provider } = req.body;

  if (!email || !name || !profilePhoto || !provider) {
    throw new apiError(400, "Please provide all fields");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if(typeof id === "number"){
       id = id.toString();
  }
  let newUser;
  if (!user) {
    try {
      const userName = email.split("@")[0]; 
    newUser = await prisma.user.create({
      data: {
        id,
        email,
        name,
        profilePhoto,
        provider,
        userName,
      },
    });
      console.log("User create successfully")
     
    } catch (error) {
      console.log("Error", error);

    }
  }

  if (!newUser) {
    throw new apiError(500, "User not created");
  }
  return res.status(201).json(
   new apiResponse(newUser || user, 201, "User created successfully", true)
  );
});
