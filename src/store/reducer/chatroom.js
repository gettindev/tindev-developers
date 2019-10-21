// == Initial State
import messageData from 'src/data/messages'; // data

const initialState = {
  messages: messageData,
  messageValue: 'test',
};

// == Types
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

const chatroom = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: 'coucou',
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

// // == Selectors

// == Export
export default chatroom;
