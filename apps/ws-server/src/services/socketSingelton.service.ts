// services/socketSingleton.service.ts
import { Server } from "socket.io";
import { authenticateSocket } from "../middlewares/auth.middlewares";
import { handleConnection } from "../handlers/socketHandler";

export class SocketSingelton {
    private static instance: Server;

    private constructor() {}

    public static getInstance(server: any): Server {
        if (!SocketSingelton.instance) {
            const io = new Server(server, {
                cors: {
                    origin: process.env.CLIENT_URL || "http://localhost:3000",
                    methods: ["GET", "POST"],
                    credentials: true,
                    allowedHeaders: ["authorization"]
                },
                transports: ["websocket", "polling"],
                allowEIO3: true,
            });

            // Authentication middleware
            io.use(async (socket, next) => {
                try {
                   
                    const token = socket.handshake.auth.token 

                    if (!token) {
                        console.error("No token provided in handshake");
                        return next(new Error("Authentication error: No token provided"));
                    }

                    const user = await authenticateSocket(token);
                    
                    if (!user) {
                        console.error("Invalid token provided");
                        return next(new Error("Authentication error: Invalid token"));
                    }

                    // Attach user to socket for later use
                    (socket as any).user = user;
                    next();
                } catch (err) {
                    console.error("Authentication middleware error:", err);
                    next(new Error("Authentication error"));
                }
            });

            io.on("connection", (socket) => {
                console.log(`New connection from user: ${(socket as any).user.name}`);
                handleConnection(io, socket);
            });

            SocketSingelton.instance = io;
            console.log("Socket instance created");
        }

        return SocketSingelton.instance;
    }
}