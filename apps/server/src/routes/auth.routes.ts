import { Router}from "express";
import { authController } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/", authController);

export default authRoutes;