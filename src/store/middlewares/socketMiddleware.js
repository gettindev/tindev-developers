// Handle WebSocket connection and Axios request to API to fetch user matches and messages to be sent to MatchingContainer

import axios from 'axios';

import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from 'src/store/reducer/chatroom';

import { GET_MATCHES_MESSAGES, UPDATE_CONVERSATIONS,updateMatchList, FETCH_CONVERSATIONS, updateConversations } from 'src/store/reducer/chatlistReducer';

// import { FETCH_CONVERSATIONS } from 'src/store/reducer/chatroom';


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
      console.log(action);
      const userId = 2;
       axios.get(`http://localhost:3001/matching/${userId}`)
       .then((result) => {
        //  console.log(result);
         const mymatches = result.data.usersListResult;
        //  console.log(mymatches);
         store.dispatch(updateMatchList(mymatches));
       }).catch((error) => {
         console.log(error);
       });
      break;

    case FETCH_CONVERSATIONS:
      console.log(action);
      console.log(`je veux recuperer les messages en BDD de l'utilisateur connecte: ${userId}`);
      axios.get(`http://localhost:3001/profil/2`)
        .then((result) => {
          // envoyer les donnees au state
        }).catch((error) => {
          console.log(error);
        });

    default:
      next(action);
  }
};

export default socketMiddleware;
