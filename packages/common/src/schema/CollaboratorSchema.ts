import {z} from "zod";


export const CollaboratorSchema = z.object({
    id: z.union([z.string(),z.number()]).transform(String),
    fileId : z.union([z.string(),z.number()]).transform(String),
    userId : z.union([z.string(),z.number()]).transform(String),
    role : z.enum(["ADMIN","USER","EDITOR"]),
})

