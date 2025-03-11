import {createServer} from 'http';
import express from 'express';
import routes from './routes';

const app = express();
const server = createServer(app);

app.use("/api/v1",routes);

server.listen(3001,() => {
  console.log('Server is running on http://localhost:3001');
});