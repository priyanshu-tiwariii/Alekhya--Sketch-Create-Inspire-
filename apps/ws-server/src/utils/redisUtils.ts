import { redis } from "../db/index";

export const storeUserInRedis = async (userData: { fileId: string, userId: string, userName: string, socketId: string }) => {
    const { fileId, userId, userName, socketId } = userData;

    await redis.hset(`file:${fileId}:users:${userId}`, {
        userId,
        userName,
        socketId
    });

    await redis.hincrby(`file:${fileId}`, "activeUsers", 1);

    const activeUsers = await redis.hget(`file:${fileId}`, "activeUsers");
    console.log(`Active users in file ${fileId}: ${activeUsers}`);
};
