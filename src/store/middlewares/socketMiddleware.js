// Handle WebSocket connection and Axios request to API to fetch user matches and messages to be sent to MatchingContainer

import axios from 'axios';

import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from 'src/store/reducer/chatroom';

import { GET_MATCHES_MESSAGES } from 'src/store/reducer/chatlistReducer';


let socket;
console.log('socket.io connected');

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = window.io('http://localhost:3001');
      // socket.on('send_message', (message) => {
      socket.on('send_message', ({ message }) => {
        // console.log('send', message.message.text);
        // DESTRUCTOR
        // const { id, text } = message.message;
        // const messageToState = { id, text };
        // const messageToState = message.message;
        const messageToState = message;
        store.dispatch(receiveMessage(messageToState));
      });
      break;

    case ADD_MESSAGE: {
      const dataFromState = store.getState();
      const { messageValue, currentUser } = dataFromState.chatroom;

      const newMessage = {
        text: messageValue,
        author: currentUser,
      };

      if (messageValue.length > 0) {
        socket.emit('send_message', newMessage);
      }
      // console.log('newMessage:', newMessage);
      next(action);
      break;
    }

    case GET_MATCHES_MESSAGES:
      console.log('je recupere les messages et matchs');
      break;

    default:
      next(action);
  }
};

export default socketMiddleware;
