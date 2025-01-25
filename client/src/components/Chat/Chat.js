import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import './Input.css';
import './Chat.css';

const BACKENDDOMAIN = 'http://localhost:5000';

const socket = io(BACKENDDOMAIN);

const Chat = ({ location }) => {
  const { name, room } = queryString.parse(location?.search);

  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    socket.on('message', (newMesg) => {
      setMessages((prevData) => [...prevData, newMesg]);
    });

    socket.on('roomData', ({ usersData }) => {
      setUsers(usersData);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log('hello mesg', message)
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') sendMessage(event);
            }}
          />
          <button type="button" className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
        </form>
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
