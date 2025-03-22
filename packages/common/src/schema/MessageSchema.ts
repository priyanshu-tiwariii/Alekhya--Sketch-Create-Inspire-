import {z} from "zod";

const messageContentSchema = z.union([
    z.string().min(1, "Message cannot be empty"), 
    z.number(), 
    z.object({
      text: z.string().min(1, "Text cannot be empty"), 
      media: z.string().url("Invalid media URL").optional(), 
    }),
  ]);

export const MessageSchema = z.object({
        id : z.union([z.string(),z.number()]).transform(String),
        message : messageContentSchema,
        sendById : z.union([z.string(),z.number()]).transform(String),
        chatRoomId : z.union([z.string(),z.number()]).transform(String),
})
export type MessageType = z.infer<typeof MessageSchema>;
