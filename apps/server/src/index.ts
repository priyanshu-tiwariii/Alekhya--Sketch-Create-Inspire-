import {createServer} from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import cookieParser from 'cookie-parser';
import { env } from '@repo/backend-common/config';
import compression from 'compression';

const app = express();
const server = createServer(app);
app.use(compression());
app.use(cookieParser());

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api/v1",routes);
server.listen(env.HTTP_PORT,() => {
  console.log(`Http-Server is running on port  ${env.HTTP_BASE_URL}`);
});