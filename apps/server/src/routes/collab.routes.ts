
import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { addCollabMember, getAllCollabMember, removeCollabMember, updateCollabMember } from "../controllers/collab.controller";

const collabRouter : Router = Router();

collabRouter.post("/:fileId", verifyToken, addCollabMember);
collabRouter.get("/:fileId", verifyToken, getAllCollabMember);
collabRouter.delete("/:fileId", verifyToken, removeCollabMember);
collabRouter.patch("/:fileId", verifyToken, updateCollabMember);



export default collabRouter;