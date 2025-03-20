import express from "express";
import { createServer } from "node:http";
import { initializeSocket } from "./services/socket.service";
import { env } from "@repo/backend-common/config";

const app = express();
const server = createServer(app);
initializeSocket(server);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   }, 
  
//   transports: ["websocket"],
//   allowEIO3: true ,
//   allowRequest: (req, callback) => {
//     try {
//       const authHeader = req.headers["authorization"];
//       if (!authHeader) {
//         return callback(null, false);
//       }

//       const token = authHeader.split(" ")[1];
//       if (!token) {
//         return callback(null, false);
//       }
//       const jwtSecret = process.env.JWT_SECRET;
//       if (!jwtSecret) {
//         throw new Error("JWT_SECRET is not defined in the environment variables");
//       }

//       const verifiedToken = jwt.verify(token,jwtSecret);
//       if (verifiedToken) {
//         return callback(null, true);
//       } else {
//         return callback(null, false);
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("JWT Verification Failed:", error.message);
//       } else {
//         console.error("JWT Verification Failed:", error);
//       }
//       return callback(null, false);
//     }
//   },
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// io.on("connection", (socket) => {
//   console.log(`A user connected: ${socket.id}`);

//   socket.on("message", (msg) => {
//     console.log(`Message from ${socket.id}: ${msg}`);
//     io.emit("message", msg); 
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

server.listen(env.WS_PORT, () => {
  console.log( `Server running at ${env.WS_BASE_URL}`);
});
