import { createRoom } from "../controllers/room.controller";
import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { joinRoom } from "../controllers/room.controller";
import { leaveRoom } from "../controllers/room.controller";
import { deleteRoom } from "../controllers/room.controller";
import { roomMembers } from "../controllers/room.controller";


const roomRoutes: Router = Router();

roomRoutes.post("/", verifyToken, createRoom);
roomRoutes.put("/join", verifyToken, joinRoom);
roomRoutes.put("/leave", verifyToken, leaveRoom);
roomRoutes.delete("/", verifyToken, deleteRoom);
roomRoutes.get("/members", verifyToken, roomMembers);

export default roomRoutes;