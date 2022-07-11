import React, { useState, useEffect } from "react";
import './App.css';
import socketIOClient from "socket.io-client";
import Button from "../../library/Button";
import Navbar from "../../library/Navbar";

//const ENDPOINT = "https://streamers-waitlist.herokuapp.com/";
const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function LobbyPage() {
    const [joined, setJoined] = useState(false);
    const [roomList, setRoomList] = useState();

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('joined', data => {
            setJoined(true)
        })
        socket.on('roomList', data => {
            const roomsLI = data.map((room,index) =>
                <li onClick={() => {
                    socket.emit('joinNewRoom',room.roomName);
                }
                } key={'key:'+index}>{room.roomName}</li>
            );
            setRoomList(roomsLI);
        })
        return () => socket.disconnect();
    }, []);
  return (
      <div>
          <div className="App">
              <h2>Publicly Available Rooms</h2>
              <ul className={'room-list'}>
                  {roomList}
              </ul>
          </div>
      </div>

  );
}

export default LobbyPage;
