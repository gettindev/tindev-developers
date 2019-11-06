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
        text: action.message,
        author: action.currentId,
      }
      // if (newMessage.text.length > 0) {
        // return (
      socket.emit('send_message', message );

      store.dispatch(receiveMessage(message));
      // };
      // console.log('newMessage:', newMessage)
      break;
    case GET_MATCHES_MESSAGES: {
      // console.log(action);
      const currentId = 2;
      axios.get(`http://localhost:3001/matching/${currentId}`)
        .then((result) => {
          //  console.log(result);
          const mymatches = result.data.usersListResult;
          //  console.log(mymatches);
          store.dispatch(updateMatchList(mymatches));
        }).catch((error) => {
          console.log(error);
        });
    }
      break;

    case FETCH_MESSAGES: {
      console.log(action);
      const { currentId, userId } = action;
      // console.log('les users en state:', currentId, userId);
      // // console.log('GAEL', `je veux recuperer les messages en BDD de l'utilisateur connecte: ${userId}`);
      axios.post('http://localhost:3001/messages/', { currentId, userId })
        // { currentId, userId })
        .then((result) => {
          console.log(result.data);
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
