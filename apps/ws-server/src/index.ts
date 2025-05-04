import express from "express";
import { createServer } from "node:http";
import { SocketSingelton } from "./services/socketSingelton.service";
import { env } from "@repo/backend-common/config";

const app = express();
const server = createServer(app);
SocketSingelton.getInstance(server);

server.listen(env.WS_PORT, () => {
  console.log( `Server running at ${env.WS_BASE_URL}`);
});
