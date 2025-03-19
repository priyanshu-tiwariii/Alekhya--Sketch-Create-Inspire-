import {Server} from "socket.io"

import { authenticateSocket} from "../middlewares/auth.middlewares"


export const initializeSocket = (server : any) => {
    const io = new Server(server,{
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        },
        transports: ["websocket"],
        allowEIO3: true,
        allowRequest: authenticateSocket
    });

    io.on("connection", (socket) => {
        console.log(`A user connected: ${socket.id}`);

        socket.on("message", (msg) => {
            console.log(`Message from ${socket.id}: ${msg}`);
            io.emit("message", msg);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    }
    )
    return io;
}
