import jwt from "jsonwebtoken";
import { env } from "@repo/backend-common/config";


export const authenticateSocket = async (token?: string) => {
  if (!token) {
    console.error("No token provided");
    return null;
  }

  try {
    const tokenWithoutPrefix = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
    if (!tokenWithoutPrefix) {
      console.error("Invalid token format");
        return null;
    }
    const decoded = jwt.verify(tokenWithoutPrefix, env.JWT_SECRET!) 
    console.log("Successfully authenticated socket for user:", decoded);
    return decoded;
  } catch (err) {
    console.error("Socket authentication failed:", err);
    return null;
  }
};