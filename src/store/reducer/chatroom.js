// == Initial State
import messageData from 'src/data/messages'; // data

const initialState = {
  messages: messageData,
  messageValue: '',
};

// == Types
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const chatroom = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: action.value,
      };
    case ADD_MESSAGE: {
      const newMessage = {
        text: state.messageValue,
        id: 999,
      };
      return {
        ...state,
        messages: [
          ...state.messages,
          newMessage,
        ],
      };
    }
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

// // == Selectors

// == Export
export default chatroom;
