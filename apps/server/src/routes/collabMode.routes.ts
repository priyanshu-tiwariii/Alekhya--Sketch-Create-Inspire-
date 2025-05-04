import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { collabMode,getCollabModeStatus } from "../controllers/collabMode.controller";

const collabModeRoutes : Router = Router();

collabModeRoutes.post("/:fileId", verifyToken, collabMode);
collabModeRoutes.get("/:fileId", verifyToken, getCollabModeStatus);

export default collabModeRoutes;