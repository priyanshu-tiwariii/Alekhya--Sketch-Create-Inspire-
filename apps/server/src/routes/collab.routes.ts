
import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { addCollabMember, getAllCollabMember, isCollabarator, removeCollabMember, updateCollabMember } from "../controllers/collab.controller";

const collabRouter : Router = Router();

collabRouter.post("/:fileId", verifyToken, addCollabMember);
collabRouter.get("/:fileId", verifyToken, getAllCollabMember);
collabRouter.delete("/:fileId", verifyToken, removeCollabMember);
collabRouter.patch("/:fileId", verifyToken, updateCollabMember);
collabRouter.get('/isCollab/:fileId', verifyToken,isCollabarator);



export default collabRouter;