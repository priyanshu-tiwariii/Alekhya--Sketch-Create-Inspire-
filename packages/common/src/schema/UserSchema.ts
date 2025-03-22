import {z} from "zod";


export const UserSchema = z.object({
        id : z.union([z.string(),z.number()]).transform(String),
        email: z.string().email("Invalid email"),
        name: z.string().min(1,"Invalid name"),
        bio : z.string().optional(),
        profilePhoto: z.string().url("Invalid URL"),
        provider: z.enum(["google","github"]),
})

export type UserType = z.infer<typeof UserSchema>;