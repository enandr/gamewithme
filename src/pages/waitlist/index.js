import React, { useState, useEffect } from "react";
import './App.css';
import socketIOClient from "socket.io-client";
import Button from "../../library/Button";
import Navbar from "../../library/Navbar";

//const ENDPOINT = "https://streamers-waitlist.herokuapp.com/";
const ENDPOINT = "localhost:42630";

function WaitlistPage() {
    const [joined, setJoined] = useState(false);
    const [hasBeenChosen, sethasBeenChosen] = useState(false);
    const [waitingForChosen, setWaitingForChosen] = useState(true);
    const [roomMessage, setRoomMessage] = useState('');
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('joined', data => {
            setJoined(true)
        })
        socket.on('roomList', data => {
            setRoomList(data);
            console.log(data);
        })
        socket.on('hasBeenChosen', data => {
            sethasBeenChosen(data);
            //alert(data ? 'Congratulations. You have been chosen to play.': 'Sorry. You were not chosen to play. ')
        })
        socket.on('hostHasChosen', data => {
            setWaitingForChosen(false)
        })
        socket.on('roomCode',data => {
            setRoomMessage(`The Room ${data.type.slice(4)} For You To Join Is: ${data.text}`)
        })
        return () => socket.disconnect();
    }, []);
  return (
      <div>
          <div className="App">
              <h1 className={'status'}>You Have {joined ? 'Joined' : 'Not Joined'} The Waitlist</h1>
              <Button label={'test'}/>
              <h2 style={{color: waitingForChosen ? 'orange' : hasBeenChosen ? 'green': 'red'}}>{waitingForChosen ? 'Waiting For The Host...' : hasBeenChosen ? 'Congratulations! You Have Been Chosen' : 'Sorry. You Were Not Chosen'}</h2>
              {roomMessage && <h3>{roomMessage}</h3>}
              {waitingForChosen && (<div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>)}
          </div>
      </div>

  );
}

export default WaitlistPage;
