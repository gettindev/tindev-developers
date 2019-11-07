// == Initial State
import messageData from 'src/data/messages';

export const initialState = {
  // messagesInDatabase: [],
  messages: [],
  messageValue: '',
  currentUser: '',
};

// == Types
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
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
    case UPDATE_MESSAGES: // messages fetched from DB sent to state
      return {
        ...state,
        messages: [...action.messages],
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
export const addMessage = (message, currentId) => ({
  type: ADD_MESSAGE,
  message,
  currentId,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const fetchMessages = (currentId, userId) => ({
  type: FETCH_MESSAGES,
  currentId,
  userId,
});

export const updateMessages = (messages) => ({
  type: UPDATE_MESSAGES,
  messages,
});

// // == Selectors

// == Export
export default chatroom;
