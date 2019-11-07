/* eslint-disable no-console */

// Handle WebSocket connection and Axios request to API to fetch user matches and messages to be sent to MatchingContainer

import axios from 'axios';

import {
  WEBSOCKET_CONNECT,
  ADD_MESSAGE,
  receiveMessage,
  updateMessages,
  FETCH_MESSAGES,
} from 'src/store/reducer/chatroom';

import { GET_MATCHES_MESSAGES, updateMatchList, updateConversations } from 'src/store/reducer/chatlistReducer';

let socket;
console.log('socket.io connected');

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      console.log(action)
      socket = window.io('http://localhost:3001');
      // socket.on('send_message', (message) => {
      socket.on('send_message', ({ message }) => {
        // DESTRUCTOR
        // const { id, text } = message.message;
        // const messageToState = { id, text };
        // const messageToState = message.message;
        store.dispatch(receiveMessage(message));
      });
      break;
    case ADD_MESSAGE:
      const message = {
        content: action.message,
        currentId: action.currentId,
      }
      // if (newMessage.text.length > 0) {
        // return (
      socket.emit('send_message', message);

      store.dispatch(receiveMessage(message));
      // };
      // console.log('newMessage:', newMessage)
      break;
    case GET_MATCHES_MESSAGES: {
      const currentId = localStorage.getItem('id'); // 20
      axios.get(`http://localhost:3001/matching/${currentId}`)
        .then((result) => {
          console.log('Liste Des Matchs', result.data.usersListResult);

          const mymatches = result.data.usersListResult;
          // const lastMessages = result.data.matchs.map((match) => match.messages);
          console.log(`Result.DATA matching/${currentId}`, result.data);
          store.dispatch(updateMatchList(mymatches));
          // console.log(lastMessages);
          store.dispatch(updateConversations(result.data));
        }).catch((error) => {
          console.log(error);
        });
    }
      break;

    case FETCH_MESSAGES: {
      console.log(action);
      const { currentId, userId } = action;
      console.log('FETCH USER ID MESSAGES', userId);
      // console.log('les users en state:', currentId, userId);
      // FETCH messages between me and other I have already exchanged with
      axios.post('http://localhost:3001/messages/', { currentId, userId })
        // { currentId, userId })
        .then((result) => {
          console.log('Message from DataBase: ', result.data);
          const messages = result.data;
          store.dispatch(updateMessages(messages));
        }).catch((error) => {
          console.log(error);
        });
    }
      break;
    default:
      next(action);
  }
};

export default socketMiddleware;
