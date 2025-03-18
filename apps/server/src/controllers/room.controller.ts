

import { Request, Response } from 'express';
import apiError from '../helpers/apiError';
import apiResponse from '../helpers/apiResponse';
import asyncHandler from '../helpers/asyncHandler';


export const createRoom = asyncHandler(async(req: Request, res: Response) => {
    
return res.status(201).json(
    new apiResponse("Room created successfully", 201, "Room created successfully", true)
    );
}
);