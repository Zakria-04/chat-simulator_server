import http from "http";
import app from ".";
import socketHandler from "./socket/socketHandler";

const port = 8000;

const server = http.createServer(app);

socketHandler(server);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
