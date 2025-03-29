import { Router } from "express";
import testingRoutes from "./testing.routes";
import authRoutes from "./auth.routes";
// import roomRoutes from "./room.routes";

const routes:Router = Router();

routes.use("/testing", testingRoutes);
routes.use("/auth", authRoutes);
// routes.use("/room", roomRoutes);
export default routes;
