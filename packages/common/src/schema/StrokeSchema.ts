import {z} from "zod";


export const StrokeSchema = z.object({
    id: z.union([z.string(),z.number()]).transform(String).optional(),
    type: z.string(),
    x: z.number(),
    y: z.number(),
    w: z.number().optional().default(0),
    h: z.number().optional().default(0),
    radius: z.number().optional().default(0),
    text: z.string().optional().default(""),
    fontSize: z.number().optional().default(16),
    fontFamily: z.string().optional().default("Arial"),
    color: z.string(),
})



