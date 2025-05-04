import {prisma} from "../db/index"
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import jwt from "jsonwebtoken";
import { schemas } from "@repo/common/schemas";


// CollabeMODe ON/OFF----------------------------------------------------------------------------------------------------------------------------------
export const collabMode = asyncHandler(async (req: any, res: any) => {
    try {
        const fileId = req.params.fileId;
    
        const isFileExist = await prisma.createdFile.findUnique({
            where: { id: fileId },
        });
    
        if (!isFileExist) {
            throw new apiError(404, "File not found");
        }
    
        const { collabMode } = req.body;
        await prisma.createdFile.update({
            where: { id: fileId },
            data: { collabMode: collabMode },
        });
        return res.status(200).json(
            new apiResponse(null, 200, "Collab mode updated successfully", true)
        )
    } catch (error) {
       if (error instanceof apiError) {
            throw new apiError(error.status, error.message);
        }
        else if (error instanceof Error) {
            throw new apiError(500, error.message || "Database error while updating collab mode");
        } else {
            throw new apiError(500, "Unknown error occurred while updating collab mode");
        }

    }
}
)
// --------------------------------------------------------------------------------------------------------------------------------------------------
 

//GetCollabModeStatus      
    export const getCollabModeStatus = asyncHandler(async (req: any, res: any) => {

        try {
            const fileId = req.params.fileId;
            const isFileExist = await prisma.createdFile.findUnique({
                where: { id: fileId },
            });
    
            if (!isFileExist) {
                throw new apiError(404, "File not found");
            }
    
            const collabModeStatus = isFileExist.collabMode;
    
            return res.status(200).json(
                new apiResponse(collabModeStatus, 200, "Collab mode status fetched successfully", true)
            );
            
        } catch (error) {
            if (error instanceof apiError) {
                throw new apiError(error.status, error.message);
            }
            else if (error instanceof Error) {
                throw new apiError(500, error.message || "Database error while updating collab mode");
            } else {
                throw new apiError(500, "Unknown error occurred while updating collab mode");
            }
        }
    }
)
// --------------------------------------------------------------------------------------------------------------------------------------------------