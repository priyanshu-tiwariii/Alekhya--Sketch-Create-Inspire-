import {z} from "zod";


export const ChatRoomSchema = z.object({
        id : z.union([z.string(),z.number()]).transform(String),
        slug: z.string().min(1,"Invalid name").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
        createdByUserId: z.union([z.string(),z.number()]).transform(String),
})
export type ChatRoomType = z.infer<typeof ChatRoomSchema>;

