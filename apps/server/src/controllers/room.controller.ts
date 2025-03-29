

// import { Request, Response } from 'express';
// import apiError from '../helpers/apiError';
// import apiResponse from '../helpers/apiResponse';
// import asyncHandler from '../helpers/asyncHandler';
// import { schemas } from '@repo/common/schemas';
// import prisma from '../db/prismaClient';
// interface User {
//     id: string;
//     email: string;
//     name: string;
//     profilePhoto: string;
//     provider: string;
//     userName: string;
//     bio: string;
//     createdAt: Date;
//   }

  
//   declare module "express" {
//     interface Request {
//       user?: User;
//     }
//   }

// //Creating Room ->
// export const createRoom = asyncHandler(async (req:Request, res:Response) => {
//     try {

//       if(req.user === undefined){
//         throw new apiError(400, "User not found");
//         } 
        
        
//       const parseSchema = schemas.ChatRoomSchema.safeParse(req.body);
      
//       if (!parseSchema.success) {
//         throw new apiError(400, parseSchema.error.errors.map(e => e.message).join(", "));
//       }

      
  
//       const { slug, createdByUserId } = parseSchema.data;
//       if(createdByUserId !== req.user.id){
//         throw new apiError(400, "User not authorized to create room");
//       }
  
//       const room = await prisma.chatRoom.findUnique({ where: { slug } });
//       if (room) {
//         throw new apiError(400, "Room already exists");
//       }
  
//       const newRoom = await prisma.chatRoom.create({
//         data: {
//           slug,
//           createdByUserId,
//           members: {
//             connect: { id: createdByUserId }, // Add the creator to the room
//           },
//         },
//       });
  
//       if (!newRoom) {
//         throw new apiError(500, "Error creating room");
//       }
  
//       return res.status(201).json(
//         new apiResponse(newRoom, 201, "Room created successfully and creator joined successfully", true)
//       );
//     } catch (error) {
//       console.log("Error in creating Chat Room -> ", error);
//       if (error instanceof Error) {
//         throw new apiError(400, error.message);
//       } else {
//         throw new apiError(400, "Error in creating Chat Room");
//       }
//     }
//   });

// //Joining Room ->
// export const joinRoom = asyncHandler(async (req: Request, res:Response) => {
//     try {
    
//         if(req.user === undefined){
//             throw new apiError(400, "User not found");
//         }

//       const { roomName, userId } = req.body;
//       if (!roomName || !userId) {
//         throw new apiError(400, "Room Name and User ID are required");
//       }
  
//       if(userId !== req.user.id){
//         throw new apiError(400, "User not authorized to join room");
//       }

//       const room = await prisma.chatRoom.findUnique({
//         where: { slug: roomName },
//         include: { members: true },
//       });
  
//       if (!room) {
//         throw new apiError(404, "Room not found");
//       }

//       const isUserInRoom = room.members.some((member :any)=> member.id === userId);
//         if(isUserInRoom){
//             throw new apiError(400,"User already in room");
//         }
  
//       // Add the user to the room
//       const updatedRoom = await prisma.chatRoom.update({
//         where: { slug: roomName },
//         data: {
//           members: {
//             connect: { id: userId },
//           },
//         },
//       });
  
//       return res.status(200).json(
//         new apiResponse(updatedRoom, 200, "User joined room successfully", true)
//       );
//     } catch (error) {
//       console.log("Error in joining room -> ", error);
//       if (error instanceof Error) {
//         throw new apiError(400, error.message);
//       } else {
//         throw new apiError(400, "Error in joining Chat Room");
//       }
//     }
//   });

// //Leaving Room ->
// export const leaveRoom = asyncHandler(async (req: Request, res: Response) => {
//     try {
    
//         if(req.user === undefined){
//             throw new apiError(400, "User not found");
//         }
        
//       const { roomName, userId } = req.body;
//       if (!roomName || !userId) {
//         throw new apiError(400, "Room Name and User ID are required");
//       }
  
//      if(userId !== req.user.id){
//         throw new apiError(400, "User not authorized to leave room");
//       }
//       const room = await prisma.chatRoom.findUnique({
//         where: { slug: roomName },
//         include: { members: true }, 
//       });
  
//       if (!room) {
//         throw new apiError(404, "Room not found");
//       }

//         const isUserInRoom = room.members.some((member :any)=> member.id === userId);
//             if(!isUserInRoom){
//                 throw new apiError(400,"User not in room");
//             }
  
//       const updatedRoom = await prisma.chatRoom.update({
//         where: { slug: roomName },
//         data: {
//           members: {
//             disconnect: { id: userId },
//           },
//         },
//         include: { members: true }
//       });

//         if(updatedRoom.members.length === 0){
//             await prisma.chatRoom.delete({
//                 where: { slug: roomName },
//             });
//         }

//       return res.status(200).json(
//         new apiResponse(updatedRoom, 200, "User left room successfully", true)
//       );
//     } catch (error) {
//       console.log("Error in leaving room -> ", error);
//       if (error instanceof Error) {
//         throw new apiError(400, error.message);
//       } else {
//         throw new apiError(400, "Error in Leaving Chat Room");
//       }
//     }
//   });

// //Deleting Room ->
// export const deleteRoom = asyncHandler(async (req: Request, res: Response) => {
//     try {
//         if(req.user === undefined){
//             throw new apiError(400, "User not found");
//         }

//       const { roomName } = req.body;
//       if (!roomName) {
//         throw new apiError(400, "Room Name is required");
//       }
  
//       const room = await prisma.chatRoom.findUnique({where: { slug: roomName }});
      


//       console.log("Room -> ", room);
  
//       if (!room) {
//         throw new apiError(404, "Room not found");
//       }
      
//       if(room.createdByUserId !== req.user.id){
//         throw new apiError(400, "User not authorized to delete room");
//       }
  
//       await prisma.chatRoom.delete({
//         where: { slug: roomName },
//       });
  
//       return res.status(200).json(
//         new apiResponse({}, 200, "Room deleted successfully", true)
//       );
//     } catch (error) {
//       console.log("Error in deleting room -> ", error);
//       if (error instanceof Error) {
//         throw new apiError(400, error.message);
//       } else {
//         throw new apiError(400, "Error in deleting Chat Room");
//       }
//     }
//   });

//   //Getting All Members of Room ->
// export const roomMembers = asyncHandler(async (req: Request, res: Response) => {
//     try {
//       const {roomName} = req.body;

//       if (!roomName) {
//         throw new apiError(400, "Room Name is required");
//       }

//       // Ensure roomName is a string

//       const room = await prisma.chatRoom.findUnique({
//         where: { slug: roomName },
//         include: { members: true },
//       });
  
//       if (!room) {
//         throw new apiError(404, "Room not found");
//       }
  
//       return res.status(200).json(
//         new apiResponse(room.members, 200, "Room members fetched successfully", true)
//       );
//     } catch (error) {
//       console.log("Error in getting room members -> ", error);
//         if (error instanceof Error) {
//             throw new apiError(400, error.message);
//         } else {
//             throw new apiError(400, "Error in getting room members");
//         }
//     }
//   }
//     );



