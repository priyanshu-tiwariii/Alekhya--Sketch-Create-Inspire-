import { Server, Socket } from "socket.io";
import { redis } from "../db/index";
import { redisPub, redisSub } from "@repo/backend-common/redis";

interface StrokeData {
  fileId: string;
  role: string;
  action: 'create' | 'update' | 'delete';
  stroke: any;
}

const subscribedChannels = new Set<string>();

// Subscribe to Redis channel for file events ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function subscribeToFileChannel(io: Server, fileId: string)
    {
    if (subscribedChannels.has(fileId)) return;

    redisSub.subscribe(`file:${fileId}`, (err) => {
        if (err) {
        console.error(`Error subscribing to file:${fileId}`, err);
        return;
        }
        console.log(`Subscribed to Redis channel file:${fileId}`);
        subscribedChannels.add(fileId);
    });

    redisSub.on("message", (channel, message) => {
        try {
        const { action, payload } = JSON.parse(message);
        console.log(`Received message on channel ${channel}:`, action, payload);
        io.to(channel.replace('file:', '')).emit(action, payload);
        } catch (error) {
        console.error('Error processing Redis message:', error);
        }
    });
    }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Handle socket connection and events
    export const handleConnection = async (io: Server, socket: Socket) => {
    try {
        const user = (socket as any).user;
        console.log(`${user.name} connected. Socket ID: ${socket.id}`);

        // Join file room & track active users ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            socket.on("join-file", async (fileId: string, userId: string, role: string) => {
            if (!fileId || userId !== user.id) {
                console.error("Invalid join-file request");
                return socket.disconnect(true);
            }
            

            try {
                await socket.join(fileId);
                console.log(`Socket ${socket.id} joined file ${fileId}`);
                
                // Track active users in Redis----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                const activeUsers = await redis.hincrby(`file:${fileId}`, "activeUsers", 1);
                subscribeToFileChannel(io, fileId);
                
                // Notify others about new collaborator----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                socket.to(fileId).emit('collaborator:joined', {
                userId: user.id,
                name: user.name,
                role
                });
            } catch (error) {
                console.error('Join-file error:', error);
            }
            });
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        // Handle stroke operations----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            const handleStrokeOperation = async (
            action: StrokeData['action'],
            { fileId, role, stroke }: StrokeData
            ) => {
            if (role !== "ADMIN" && role !== "EDITOR") {
                return socket.emit("error", { message: "Unauthorized operation" });
            }

            try {
                const message = JSON.stringify({
                action: `stroke:${action}`,
                payload: {stroke }
                });
                console.log(`Publishing stroke:${action} for file ${fileId}`);
                
                
                await redisPub.publish(`file:${fileId}`, message);
                console.log(`Published stroke:${action} for file ${fileId}`);
            } catch (error) {
                console.error(`Stroke ${action} error:`, error);
            }
            };

            const handleStrokeDelete = async(
                action: 'delete', { fileId, role, stroke }: StrokeData) => {
                if (role !== "ADMIN" && role !== "EDITOR") {
                    return socket.emit("error", { message: "Unauthorized operation" });
                }
                try {
                    const message = JSON.stringify({
                    action: `stroke:${action}`,
                    payload: { stroke }
                    });
                    console.log(`Publishing stroke:${action} for file ${fileId}`);
                    
                    
                    await redisPub.publish(`file:${fileId}`, message);
                    console.log(`Published stroke:${action} for file ${fileId}`);
                    
                } catch (error) {
                    console.error(`Stroke ${action} error:`, error);
                }
            };

   
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        // Socket listeners for stroke operations
            socket.on("stroke:create", (data) => handleStrokeOperation('create', data));
            socket.on("stroke:update", (data) => handleStrokeOperation('update', data));
            socket.on("stroke:delete", (data) => handleStrokeDelete('delete', data));
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        // Handle disconnections----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            socket.on("disconnect", async () => {
            const rooms = Array.from(socket.rooms).filter(room => room !== socket.id);
            
            for (const fileId of rooms) {
                try {
                const activeUsers = await redis.hincrby(`file:${fileId}`, "activeUsers", -1);
                console.log(`Active users in ${fileId}: ${activeUsers}`);

                // Notify others about collaborator leaving ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    socket.to(fileId).emit('collaborator:left', {
                        userId: user.id,
                        name: user.name
                    });
                //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                // Cleanup if no active users ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    if (activeUsers <= 0) {
                        await redis.expire(`file:${fileId}`, 600);
                        console.log(`File ${fileId} will expire in 10 minutes`);
                    }
                //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                } catch (error) {
                console.error('Disconnection error:', error);
                }
            }
            });
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        // Handle cursor movements ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            socket.on('cursor:move', (position) => {
            return socket.to(Array.from(socket.rooms) as string[]).emit('cursor:update', {
                    userId: user.id,
                    name: user.name,
                    position
                });
            });
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    } catch (err) {
        console.error("Connection error:", err);
        socket.disconnect(true);
    }
    };
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------