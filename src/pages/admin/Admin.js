import React, { useState, useEffect } from "react";
import '../waitlist/App.css';
import socketIOClient from "socket.io-client";

const ENDPOINT = "localhost:42630";

function AdminPage() {
    const [joined, setJoined] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminMessage, setAdminMessage] = useState('');
    const [dataToSend, setDataToSend] = useState({type: 'roomCode', text:''});
    const [savedSocket,setSavedSocket] = useState();
    const [waitingCount,setWaitingCount] = useState(0);
    const [whoToSelect,setWhoToSelect] = useState('all');

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        setSavedSocket(socket);
        socket.emit('isAdmin','');
        socket.on('waitingCount', data => {
            setWaitingCount(data);
        })
        socket.on('youAreAdmin',data => {
            setJoined(true)
            setIsAdmin(data);
            if (data === true) {
                setAdminMessage('You Are Admin')
            } else {
                setAdminMessage('You Are Not Admin')
            }
        })
        return () => socket.disconnect();
    }, []);

  return (
    <div className="App">
      <h1>ADMIN: {adminMessage }</h1>
        {isAdmin && (
            <div style={{display:'flex', flexDirection:'column', width: '50%', margin: '0 auto'}}>
                <div>There {waitingCount !== 1 ? 'Are' : 'Is'} {waitingCount} Player{waitingCount !== 1 && 's'} In The Waiting Room </div>
                <div>There Are X Players In The Game Lobby </div>
                <div>
                    <select value={whoToSelect} onChange={(data) => {
                        setWhoToSelect(data.currentTarget.value)
                    }}>
                        <option value={'all'}>All From Waiting</option>
                        <option value={'random'}>Random From Waiting</option>
                        <option value={'first'}>First # from Waiting</option>
                    </select>
                    {whoToSelect !== 'all' && <input placeholder={'# of players'} type={'number'}/>}
                    <button onClick={() => {
                        switch (whoToSelect){
                            case 'all':
                                savedSocket.emit('addAllToPlayers',true);
                                break;
                            default:
                                break;
                        }
                    }}>Select Players</button>
                </div>


                <select value={dataToSend.type} onChange={(data) => {
                    setDataToSend({type:data.currentTarget.value, text:dataToSend.text})
                }}>
                    <option value={'roomCode'}>Room Code</option>
                    <option value={'roomPassword'}>Room Password</option>
                </select>
                <input placeholder={'Room Code Or Password'} value={dataToSend.text} onInput={(data)=>{
                    setDataToSend({type:dataToSend.type, text:data.currentTarget.value})
                } }/>
                <button onClick={() => {
                    savedSocket.emit('adminControl',dataToSend)
                }}>Send Room Code</button>
            </div>
        )}
    </div>
  );
}

export default AdminPage;
