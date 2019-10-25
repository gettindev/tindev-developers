// == Initial State
import messageData from 'src/data/messages';

const initialState = {
  messages: messageData,
  messageValue: '',
  currentUser: 'Toto',
};

// == Types
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const chatroom = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: action.value,
      };
    case ADD_MESSAGE: {
      return {
        ...state,
        messageValue: '',
      };
    }
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message,
        ],
      };
    default:
      return state;
  }
};

// // == Action Creators
// export const doSomething = message => ({
//   type: DO_SOMETHING,
//   message,
// });
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

// // == Selectors

// == Export
export default chatroom;
