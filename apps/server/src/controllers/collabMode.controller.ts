import { prisma } from "../db/index";
import asyncHandler from "../helpers/asyncHandler";
import apiError from "../helpers/apiError";
import apiResponse from "../helpers/apiResponse";
import { schemas } from "@repo/common/schemas";

// Helper to check file existence -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const getFileById = async (fileId: string) => {
    const file = await prisma.createdFile.findUnique({
        where: { id: fileId },
    });
    if (!file) {
        throw new apiError(404, "File not found");
    }
    return file;
    };
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Toggle Collab Mode ON/OFF -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    export const collabMode = asyncHandler(async (req: any, res: any) => {
    const fileId = req.params.fileId;
    const collabMode = req.body.collabMode; 

    await getFileById(fileId); 

    await prisma.createdFile.update({
        where: { id: fileId },
        data: { collabMode}, 
    });

    return res
        .status(200)
        .json(new apiResponse(null, 200, "Collab mode updated successfully", true));
    });
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Get Collab Mode Status------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    export const getCollabModeStatus = asyncHandler(async (req: any, res: any) => {
    const fileId = req.params.fileId;

    const file = await getFileById(fileId); 

    return res
        .status(200)
        .json(new apiResponse(file.collabMode, 200, "Collab mode status fetched successfully", true));
    });
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
