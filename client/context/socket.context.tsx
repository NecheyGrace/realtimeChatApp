"use client"; // This marks the file as a client component

import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
}
const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
});

function SocketsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState("");
  return (
    <SocketContext.Provider value={{ socket, username, setUsername }}>
      {children}
    </SocketContext.Provider>
  );
}

// Custom hook to use the socket context
export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
