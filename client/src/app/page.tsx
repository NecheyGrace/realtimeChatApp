"use client";

import MessagesContainer from "../../containers/Messages";
import RoomsContainer from "../../containers/Rooms";
import { useSockets } from "../../context/socket.context";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const { socket, username, setUsername } = useSockets();
  const [socketId, setSocketId] = useState<string | null>(null);
  const usernameRef = useRef(null);
  function handleSetUsername() {
    const value = usernameRef.current.value;
    if (!value) {
      return;
    }
    setUsername(value);

    localStorage.setItem("username", value);
  }
  useEffect(() => {
    if (socket && socket.id) {
      setSocketId(socket.id);
    }
  }, [socket]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!username && (
        <div>
          <div>
            <input type="text" placeholder="Username" ref={usernameRef} />
            <button onClick={handleSetUsername} type="button">
              Start
            </button>
          </div>
        </div>
      )}
      {username && (
        <div>
          Welcome,
          <MessagesContainer />
          <RoomsContainer />
        </div>
      )}

      <div>{socketId ? socketId : "Loading..."}</div>
      <div>GOD IS GOOD</div>
    </main>
  );
}
