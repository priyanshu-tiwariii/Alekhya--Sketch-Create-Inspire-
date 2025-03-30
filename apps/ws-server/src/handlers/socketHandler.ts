import { Server, Socket } from "socket.io";
import { redis } from "../db/index";
import { storeUserInRedis } from "../utils/redisUtils";
interface UserData {
    fileId: string;
    userId: string;
    userName: string;
    socketId: string;
}

export const handleConnection = async (socket: Socket) => {
    try {
        console.log(` ${(socket.request as any).user.userName} connected. Socket ID -> ${socket.id}`);

        const fileId = socket.handshake.query.fileId as string;
        const userId = (socket.request as any).user.id;
        const userName = (socket.request as any).user.userName;

        if (!fileId || !userId || !userName) {
            console.error("Missing required parameters: fileId, userId, or userName");
            socket.disconnect();
            return;
        }

        const userData: UserData = { fileId, userId, userName, socketId: socket.id };
        await storeUserInRedis(userData);

        socket.on("message", (msg) => {
            console.log(`Message from ${socket.id}: ${msg}`);
            socket.broadcast.to(fileId).emit("message", msg);
        });

        socket.on("disconnect", () => handleDisconnection(socket, fileId, userId));

        socket.on("error", (error) => console.error(`Socket error: ${error}`));

    } catch (err) {
        console.error(`Error in connection handler: ${err}`);
        socket.disconnect();
    }
};

export const handleDisconnection = async (socket: Socket, fileId: string, userId: string) => {
    try {
        console.log(`User disconnected: ${socket.id}`);
        
        await redis.hincrby(`file:${fileId}`, "activeUsers", -1);
        await redis.hdel(`file:${fileId}:users:${userId}`, "userId", "userName", "socketId");

        const activeUsers = Number(await redis.hget(`file:${fileId}`, "activeUsers") ?? 0);
        console.log("ActiveUsers -> ",activeUsers);

        if (activeUsers <= 0) {
            await redis.expire(`file:${fileId}`, 600);
            console.log(`File ${fileId} will be deleted from Redis after timeout.`);
        }

        console.log(`Active users in file ${fileId}: ${activeUsers}`);

    } catch (err) {
        console.error(`Error handling disconnect: ${err}`);
    }
};
