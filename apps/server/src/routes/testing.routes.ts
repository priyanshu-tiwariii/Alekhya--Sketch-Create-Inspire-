import { Router } from "express";
import { testingController } from "../controllers/testing.controller";

const testingRoutes= Router();

testingRoutes.get('/', testingController);

export default testingRoutes;