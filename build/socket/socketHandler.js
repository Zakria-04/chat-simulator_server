"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
exports.default = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
        },
    });
    io.on("connection", (socket) => {
        console.log(`Socket connected ${socket.connected}`);
        socket.on("disconnect", () => {
            console.log(`socket disconnected ${socket.id}`);
        });
    });
};
