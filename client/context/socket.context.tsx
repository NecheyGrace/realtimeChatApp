"use client"; // This marks the file as a client component

import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  roomId?: string;
  roomName: object;
}
const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  roomName: {},
});

function SocketsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomName, setRoomName] = useState({});
  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRoomName(value);
  });
  return (
    <SocketContext.Provider
      value={{ socket, username, setUsername, roomName, roomId }}
    >
      {children}
    </SocketContext.Provider>
  );
}

// Custom hook to use the socket context
export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
