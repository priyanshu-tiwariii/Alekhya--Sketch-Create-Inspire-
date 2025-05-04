import { Redis } from "ioredis";

const redisOptions = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
};

export const redisClient = new Redis(redisOptions); 
export const redisPub = new Redis(redisOptions);    
export const redisSub = new Redis(redisOptions);   

const instances = [redisClient, redisPub, redisSub];
instances.forEach((instance, index) => {
  const name = ["Main", "Pub", "Sub"][index];
  instance.on("connect", () => console.log(`Redis ${name} connected`));
  instance.on("error", (err) => console.error(`Redis ${name} error`, err));
});
