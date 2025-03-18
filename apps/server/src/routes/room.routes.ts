import { createRoom } from "../controllers/room.controller";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";

const roomRoutes: Router = Router();

roomRoutes.post("/", verifyToken, createRoom);

export default roomRoutes;