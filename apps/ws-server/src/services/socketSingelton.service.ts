import { Server } from "socket.io";
import { authenticateSocket } from "../middlewares/auth.middlewares";
import { redis } from "../db/index";
import { handleConnection } from "../handlers/socketHandler";

// export const initializeSocket = (server: any) => {
//     const io = new Server(server, {
//         cors: {
//             origin: "*",
//             methods: ["GET", "POST"]
//         },
//         transports: ["websocket"],
//         allowEIO3: true,
//         allowRequest: authenticateSocket
//     });

//     io.on("connection", (socket) => handleConnection(socket));

//     return io;
// };


export class SocketSingelton {
    private static instance : Server
    private constructor() {} 
    public static getInstance(server:any) : Server {
        if(!SocketSingelton.instance){
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
            SocketSingelton.instance = io;
            console.log("Socket instance created");
        }
        else{
            console.log("Socket instance already exists");
        }

        return SocketSingelton.instance;
    }
}
