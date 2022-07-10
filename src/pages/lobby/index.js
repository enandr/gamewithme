import React, { useState, useEffect } from "react";
import './App.css';
import socketIOClient from "socket.io-client";
import Button from "../../library/Button";
import Navbar from "../../library/Navbar";

//const ENDPOINT = "https://streamers-waitlist.herokuapp.com/";
const ENDPOINT = "localhost:42630";

function LobbyPage() {
    const [joined, setJoined] = useState(false);
    const [hasBeenChosen, sethasBeenChosen] = useState(false);
    const [waitingForChosen, setWaitingForChosen] = useState(true);
    const [roomMessage, setRoomMessage] = useState('');
    const [roomList, setRoomList] = useState();

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('joined', data => {
            setJoined(true)
        })
        socket.on('roomList', data => {
            const roomsLI = data.map((room,index) =>
                <li onClick={() => {
                    socket.emit('joinNewRoom',room);
                }
                } key={'key:'+index}>{room}</li>
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
