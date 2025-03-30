import {Redis} from "ioredis"

const redis = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
    lazyConnect: true,
})

redis.on("error", (err) => {
    console.error("Redis error", err);
}
)

redis.on("connect", () => {
    console.log("Redis connected");
})

redis.on("ready", () => {
    console.log("Redis ready");
})

redis.on("end", () => {
    console.log("Redis connection closed");
})

redis.on("reconnecting", () => {
    console.log("Redis reconnecting");
})

export default redis;