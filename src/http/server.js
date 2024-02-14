"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get("/hello", () => {
    return 'Hello Guina';
});
app.listen({ port: 3000 }).then(() => {
    console.log("HTTP SERVER RUNNING!");
});
