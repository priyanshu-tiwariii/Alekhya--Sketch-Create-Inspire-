
import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";

const canvasRoutes : Router = Router();

import { createStroke } from "../controllers/canvas.controller";
import { getStroke } from "../controllers/canvas.controller";


canvasRoutes.post("/:fileId", verifyToken, createStroke);
canvasRoutes.get("/:fileId", verifyToken, getStroke);


export default canvasRoutes;