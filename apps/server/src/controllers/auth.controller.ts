import prisma from "../db/prismaClient";
import jwt from "jsonwebtoken";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";

export const authController = asyncHandler(async (req: any, res: any) => {
  const { email, name, profilePhoto, provider } = req.body;
  console.log("Data", req.body);

  if (!email || !name || !profilePhoto || !provider) {
    throw new apiError(400, "Please provide all fields");
  }

  const user = await prisma.user.findUnique({ where: { email } });

  let newUser;
  if (!user) {
    const userName = email.split("@")[0];
    newUser = await prisma.user.create({
      data: {
        email,
        name,
        profilePhoto,
        provider,
        userName,
      },
    });
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new apiError(
      500,
      "JWT_SECRET is not defined in environment variables"
    );
  }
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "30d" });
  const response = {
    user: newUser || user,
    token,
  };

  console.log("Response", response);
  console.log("User", newUser || user);
  return res.status(201).json(
   new apiResponse(response, 200, "User created successfully", true)
  );
});
