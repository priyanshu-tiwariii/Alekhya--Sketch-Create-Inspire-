import { Server } from "socket.io";
import { authenticateSocket } from "../middlewares/auth.middlewares";
import { redis } from "../db/index";
import { handleConnection } from "../handlers/socketHandler";

export const initializeSocket = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        },
        transports: ["websocket"],
        allowEIO3: true,
        allowRequest: authenticateSocket
    });

    io.on("connection", (socket) => handleConnection(socket));

    return io;
};
