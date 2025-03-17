import jwt from "jsonwebtoken";
import apiError from "../helpers/apiError";



export const verifyToken = async (req: any, res: any, next: any) => {

    const token = req.headers.authorization?.split(" ")[1]; //"Bearer token"=[Bearer, token] so we are taking the token.
    if(!token){
        throw new apiError(401, "Access Denied");
    }

    try {
        const verified = jwt.verify(token, process.env.NEXTAUTH_SECRET!);//since jwt is created by the next auth so to decode it we have to use nextauth secret to decode it 
        if(verified){
            req.user = verified;
            console.log("User", req.user);
            next();
        }     
    } catch (error) {
        console.log("Error", error);
        throw new apiError(401, "Invalid Token");
    }
};