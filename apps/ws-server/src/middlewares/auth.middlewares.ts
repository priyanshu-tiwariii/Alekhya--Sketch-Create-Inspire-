

import jwt from "jsonwebtoken";
import { env } from "@repo/backend-common/config";
import { prisma } from "../db/index";



export const authenticateSocket = async(req : any , callback : any) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return callback(null, false);
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return callback(null, false);
        }
        const verifiedToken = jwt.verify(token, env.JWT_SECRET!) as { email: string };
       if(!verifiedToken){
           return callback(null, false);
       }
         const user = await prisma.user.findUnique({where:{email : verifiedToken.email}});
        if(!user){
            return callback(null, false);
        }
        (req as any).user = user;
        return callback(null, true);
        
        
    } catch (error) {
        console.log("Error in auth middleware ", error);
        return callback(null, false);
    }
}