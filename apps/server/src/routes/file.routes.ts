import { createFile,deleteFile,getFile,getAllFiles } from "../controllers/file.controller";

import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";

const fileRoutes : Router = Router();

fileRoutes.post("/", verifyToken, createFile);
fileRoutes.get("/", verifyToken, getAllFiles);
fileRoutes.get("/:fileId", verifyToken, getFile);
fileRoutes.delete("/:fileId", verifyToken, deleteFile);

export default fileRoutes;