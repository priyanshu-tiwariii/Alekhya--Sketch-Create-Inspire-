import { Router } from "express";
import testingRoutes from "./testingRoutes";

const routes = Router();

routes.use("/testing", testingRoutes);
export default routes;
