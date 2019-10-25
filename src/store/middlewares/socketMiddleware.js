import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from 'src/store/reducer/chatroom';

let socket;
console.log('socket.io connected');

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('send_message', (message) => {
        console.log(message);
        store.dispatch(receiveMessage(message));
      });
      break;
      
    case ADD_MESSAGE: {
      const { currentUser, messageValue } = store.getState();

      const newMessage = {
        text: messageValue,
        author: currentUser,
      };

      console.log(newMessage);

      socket.emit('send_message', newMessage);

      next(action);

      break;
    }

    default:
      next(action);
  }
};

export default socketMiddleware;
