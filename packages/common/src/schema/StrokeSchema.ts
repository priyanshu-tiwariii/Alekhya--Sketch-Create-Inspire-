import {z} from "zod";


export const StrokeSchema = z.object({
    id: z.union([z.string(),z.number()]).transform(String),
    fileId : z.union([z.string(),z.number()]).transform(String),
    data: z.any()
})



