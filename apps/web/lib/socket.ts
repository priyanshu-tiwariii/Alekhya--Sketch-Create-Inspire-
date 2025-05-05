import { io, Socket } from "socket.io-client";

// let socket: Socket | null = null;

// export const initSocket = (token?: string): Socket | null => {
 

//   if (socket && socket.connected) {
//     return socket;
//   }  
//   socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080", {
//     withCredentials: true,
//     autoConnect: false,
//     auth: token ? { token: `${token}` } : undefined,
//     transports: ["websocket", "polling"],
//   });


//   socket.on("connect_error", (err) => {
//     console.error("Socket connection error:", err);
//   });

//   return socket;
// };
// lib/socket.ts

export class SingletonSocket {
  private static instance: Socket | null = null;

  // Prevent direct instantiation
  private constructor() {}

  public static getInstance(token?: string): Socket | null {
    if (!SingletonSocket.instance) {
      SingletonSocket.instance = io(
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8080",
        {
          withCredentials: true,
          autoConnect: false,
          auth: token ? { token: `${token}` } : undefined,
          transports: ["websocket", "polling"],
        }
      );

      SingletonSocket.instance.on("connect_error", (err) => {
        console.error("Socket connection error:", err);
      });
    }

    return SingletonSocket.instance;
  }

  public static disconnect() {
    if (SingletonSocket.instance) {
      SingletonSocket.instance.disconnect();
      SingletonSocket.instance = null;
    }
  }
}
