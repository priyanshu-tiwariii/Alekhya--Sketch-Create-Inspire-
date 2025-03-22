import jwt from "jsonwebtoken";
import apiError from "../helpers/apiError";
import { env } from "@repo/backend-common/config"
import prisma from "../db/prismaClient";


export const verifyToken = async (req: any, res: any, next: any) => {

    const token = req.headers.authorization.split(" ")[1];
    
    if(!token){
        throw new apiError(401, "Access Denied");
    }

    try {
        const verified = jwt.verify(token, env.JWT_SECRET!)as { email: string };
       
        if(verified){
            const user = await prisma.user.findUnique({where:{email : verified.email}});
            req.user = user;
            console.log("User", req.user);
            next();
        }     
    } catch (error) {
        console.log("Error", error);
        throw new apiError(401, "Invalid Token");
    }
};