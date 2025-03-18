import {createServer} from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import cookieParser from 'cookie-parser';

const app = express();
const server = createServer(app);
app.use(cookieParser());

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api/v1",routes);

server.listen(5000,() => {
  console.log('Server is running on http://localhost:5000');
});