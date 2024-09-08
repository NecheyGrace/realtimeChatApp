import React, { useRef } from "react";
import EVENTS from "../config/events";
import { useSockets } from "../context/socket.context";

function RoomsContainer() {
  const { socket, roomId, roomName } = useSockets();
  const roomNameRef = useRef(null);

  function handleCreateRoom() {
    const roomName = roomNameRef.current.value || "";
    if (!String(roomName).trim()) return;

    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    roomNameRef.current.value = "";
  }
  return (
    <nav>
      <div>
        <input ref={roomNameRef} type="text" placeholder="ROOM NAME" />
        <button onClick={handleCreateRoom}>Create room</button>
      </div>
      {Object.keys(roomName).map((key) => (
        <div key={key}>{key}</div>
      ))}
    </nav>
  );
}

export default RoomsContainer;
