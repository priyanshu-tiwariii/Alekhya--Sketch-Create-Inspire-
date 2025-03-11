import { Router } from "express";
import testingRoutes from "./testing.routes";
import authRoutes from "./auth.routes";

const routes = Router();

routes.use("/testing", testingRoutes);
routes.use("/auth", authRoutes);
export default routes;
