import { verifyToken } from "../config/jwt.config";
import { Socket } from "socket.io";


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
        const verifiedToken = await verifyToken(token);
        if (verifiedToken) {
            return callback(null, true);
        } else {
            return callback(null, false);
        }
        
    } catch (error) {
        console.log("Error in auth middleware ", error);
        return callback(null, false);
    }
}