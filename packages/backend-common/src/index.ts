import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });



export const env = {
    JWT_SECRET: process.env.JWT_SECRET,
    WS_PORT: process.env.WS_PORT||8080,
    HTTP_PORT: process.env.HTTP_PORT||5000,
    HTTP_BASE_URL: process.env.HTTP_BASE_URL,
    WS_BASE_URL: process.env.WS_BASE_URL,
};

