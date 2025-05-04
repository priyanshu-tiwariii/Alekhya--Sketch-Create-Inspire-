import {prisma} from "@repo/db";
import { redisClient } from "@repo/backend-common/redis";


export {
    redisClient as redis,
    prisma
}