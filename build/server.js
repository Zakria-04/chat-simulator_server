"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const _1 = __importDefault(require("."));
const socketHandler_1 = __importDefault(require("./socket/socketHandler"));
const port = 8000;
const server = http_1.default.createServer(_1.default);
(0, socketHandler_1.default)(server);
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
