import {z} from "zod";

export const FileSchema = z.object({
    id : z.union([z.string(),z.number()]).transform(String),
    name : z.string().min(1,"File name cannot be empty"),
    createdByUserId : z.union([z.string(),z.number()]).transform(String),
})
export type FileType = z.infer<typeof FileSchema>;