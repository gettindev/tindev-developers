// == Initial State
import messageData from 'src/data/messages';
import { getMaxId } from 'src/store/selectors';

const initialState = {
  messages: messageData,
  messageValue: '',
  currentUser: 'Toto',
};

// == Types
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const chatroom = (state = initialState, action = {}) => {
  // console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: action.value,
      };
    case ADD_MESSAGE: {
      if (state.messageValue.trim().length > 0) {
        const maxId = getMaxId(state.messages);
        const newMessage = {
          text: state.messageValue,
          id: maxId + 1,
        };

        if (state.currentUser.trim().length > 0) {
          newMessage.author = state.currentUser.trim();
        }
        return {
          ...state,
          messages: [
            ...state.messages,
            newMessage,
          ],
          messageValue: '',
        };
      }
      break;
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
