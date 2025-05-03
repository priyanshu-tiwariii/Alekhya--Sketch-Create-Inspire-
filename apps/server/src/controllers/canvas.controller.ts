import {prisma} from "../db/index"
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import jwt from "jsonwebtoken";
import { schemas } from "@repo/common/schemas";


interface Shape {
    id?: string;
    type: string;
    color: string;
    x: number;
    y: number;
    w ?: number;
    h ?: number;
    radius?: number;
    text?: string;
    fontSize?: number;
    fontFamily?: string;
}

// Create stroke-----------------------------------------------------------------------------------------------------------------------------------
    export const createStroke = asyncHandler(async (req: any, res: any) => {
        try {
        const fileId = req.params.fileId;
    
        const isFileExist = await prisma.createdFile.findUnique({
            where: { id: fileId },
        });
    
        if (!isFileExist) {
            throw new apiError(404, "File not found");
        }
    
        const { added, updated, deleted } = req.body;
    
        //Validate added strokes-----------------------------------------------------------------------------------------------------------------------------------
        const parsed = schemas.StrokeSchema.array().safeParse(added);
        if (!parsed.success) {
            throw new apiError(400, "Invalid added strokes data", parsed.error.errors);
        }
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------

        //Validate it that it is allowed to make changes ---------------------------------------------------------------------------------------------------------------------------------
        const user = req.user;
        const userId = user.id;

        const isUserAllowed = await prisma.collaborator.findFirst({
            where: {
                userId: userId,
                fileId: fileId,
            },
        });

        if(isUserAllowed?.role !== "ADMIN" && isUserAllowed?.role !== "EDITOR") {
            throw new apiError(403, "You are not allowed to make changes");
        }


        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // Insert new strokes --------------------------------------------------------------------------------------------------------------------------------------------
        const strokes = parsed.data.map((stroke) => {
            const {
            id,
            type,
            color,
            x,
            y,
            w,
            h,
            radius,
            text,
            fontSize,
            fontFamily,
            } = stroke;
    
            return {
            id,
            fileId,
            type,
            color,
            x,
            y,
            ...(w !== undefined && { w }),
            ...(h !== undefined && { h }),
            ...(radius !== undefined && { radius }),
            ...(text !== undefined && { text }),
            ...(fontSize !== undefined && { fontSize }),
            ...(fontFamily !== undefined && { fontFamily }),
            };
        });
    
    
        if (strokes.length > 0) {
            await prisma.stroke.createMany({ data: strokes });
        }
    
        //   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
        // Delete strokes -------------------------------------------------------------------------------------------------------------------------------------------------------
        if (deleted && deleted.length > 0) {
            await prisma.stroke.deleteMany({
              where: {
                id: {
                  in: deleted
                }
              }
            });
          }
        //   --------------------------------------------------------------------------------------------------------------------------------------------------
    
        //Update strokes--------------------------------------------------------------------------------------------------------------------------------------------
            if (updated && updated.length > 0) {
                await Promise.all(
                updated.map((shape: Shape) =>
                    prisma.stroke.updateMany({
                    where: { id: shape.id },
                    data: {
                        type: shape.type,
                        color: shape.color,
                        x: shape.x,
                        y: shape.y,
                        w: shape.w,
                        h: shape.h,
                        radius: shape.radius,
                        text: shape.text,
                        fontSize: shape.fontSize,
                        fontFamily: shape.fontFamily,
                    },
                    })
                )
                );
            }
        //   --------------------------------------------------------------------------------------------------------------------------------------------------
    
        return res
            .status(200)
            .json(new apiResponse(null, 200, "Stroke updated successfully", true));
        } catch (error) {
        console.error("Error updating stroke:", error);
        if (error instanceof apiError) {
            throw new apiError(error.status, error.message);
        } else if (error instanceof Error) {
            throw new apiError(500, error.message || "Database error while updating stroke");
        } else {
            throw new apiError(500, "Unknown error occurred while updating stroke");
        }
        }
    });
// --------------------------------------------------------------------------------------------------------------------------------------------------

// Get strokes-----------------------------------------------------------------------------------------------------------------------------------
    export const getStroke = asyncHandler(async (req: any, res: any) => {
        try {
            const fileId = req.params.fileId;
            const isFileExist = await prisma.createdFile.findUnique({
                where: { id: fileId },
            })
        
            if (!isFileExist) {
                throw new apiError(404, "File not found")
            }

            const user = req.user;
            const userId = user.id;
             
        
            const strokes = await prisma.stroke.findMany({
                where: { fileId: fileId },
            });
        
            return res.status(200).json(new apiResponse(strokes, 200, "Strokes fetched successfully", true));
        } catch (error) {
            
            console.error("Error fetching strokes:", error);
            if (error instanceof apiError) {
                throw new apiError(error.status, error.message);
            } else if (error instanceof Error) {
                throw new apiError(500, error.message || "Database error while fetching strokes");
            } else {
                throw new apiError(500, "Unknown error occurred while fetching strokes");
            }
        }

    }
    );
// --------------------------------------------------------------------------------------------------------------------------------------------------