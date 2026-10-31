import { io } from "socket.io-client";

export const Connect = () => {
  const socket = io("ws://localhost:8080");

  socket.on("connect", () => {
    console.log("Connected");
  });
};
