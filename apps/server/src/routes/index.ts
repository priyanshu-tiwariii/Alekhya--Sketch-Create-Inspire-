import { Router } from "express";
import testingRoutes from "./testing.routes";
import authRoutes from "./auth.routes";
import fileRoutes from "./file.routes";
import canvasRoutes from "./canvas.routes";
import collabRouter from "./collab.routes";
import collabModeRoutes from "./collabMode.routes";
// import roomRoutes from "./room.routes";

const routes:Router = Router();

routes.use("/testing", testingRoutes);
routes.use("/auth", authRoutes);
// routes.use("/room", roomRoutes);
routes.use("/file",fileRoutes);
routes.use("/canvas",canvasRoutes);
routes.use("/collab",collabRouter);
routes.use("/collabMode",collabModeRoutes);
export default routes;
