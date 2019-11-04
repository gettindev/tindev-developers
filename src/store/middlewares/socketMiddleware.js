import { WEBSOCKET_CONNECT, ADD_MESSAGE, receiveMessage } from 'src/store/reducer/chatroom';

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

    default:
      next(action);
  }
};

export default socketMiddleware;
