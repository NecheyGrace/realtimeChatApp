import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
import cors from "cors";
import logger from "./utils/logger";
import { version } from "../package.json";
import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
}); //comes from socket.io

app.get("/", (_, res) =>
  res.send(`Server is up and running ${version} and is listening`)
);
httpServer.listen(port, host, () => {
  logger.info(`Server ${version} and is listening`);
  logger.info(`http://${host}:${port}`);
  socket({ io });
});
