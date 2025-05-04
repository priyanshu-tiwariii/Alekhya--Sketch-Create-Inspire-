// lib/socket.ts
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = (token?: string): Socket | null => {
  if (socket && socket.connected) {
    return socket;
  }

 

  
  socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080", {
    withCredentials: true,
    autoConnect: false,
    auth: token ? { token: `${token}` } : undefined,
    transports: ["websocket", "polling"],
  });


  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err);
  });

  return socket;
};

export const getSocket = (): Socket => {
  if (!socket) {
    throw new Error("Socket not initialized. Call initSocket first.");
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};