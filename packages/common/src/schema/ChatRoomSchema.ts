import {z} from "zod";


export const ChatRoomSchema = z.object({
     
        slug: z.string().min(1,"Min length of name of room should be 1").max(20,"Max length of room can be 20").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
        createdByUserId: z.union([z.string(),z.number()]).transform(String),
})
export type ChatRoomType = z.infer<typeof ChatRoomSchema>;

