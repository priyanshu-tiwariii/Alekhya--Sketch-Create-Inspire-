import jwt from "jsonwebtoken";
import { env } from "./env.config";

export const verifyToken = async(token:string)=>{
    try {
        return jwt.verify(token, env.JWT_SECRET!);
        
    } catch (error) {
        console.log("Error in verifying token", error);
        return null;
    }
}