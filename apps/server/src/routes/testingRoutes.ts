import { Router } from "express";
import { testingController } from "../controllers/testingController";

const testingRoutes= Router();

testingRoutes.get('/', testingController);

export default testingRoutes;