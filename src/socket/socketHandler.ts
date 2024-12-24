import { Server as socketIO } from "socket.io";
import { Server as HTTPServer } from "http";

export default (server: HTTPServer) => {
  const io = new socketIO(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`Socket connected ${socket.connected}`);

    // get message from the client side
    socket.on("message", (data) => {
      console.log(`Message from ${socket.id}: `, data);
      // emit the message to the user
      socket.broadcast.emit("message", data); // Broadcast to all other clients
    });

    socket.on("disconnect", () => {
      console.log(`socket disconnected ${socket.id}`);
    });
  });
};
