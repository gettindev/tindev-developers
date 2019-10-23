// Import data
import  user  from 'src/data/user.js';

// == Initial State
const initialState = {
  users : user,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const GET_USERS = 'GET_USERS;';
const DO_REQUEST = 'DO_REQUEST';

// == Reducer
const matching = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});

export const getUsers = () => ({
  type: GET_USERS,
})

export const doRequest = () => ({
  type: DO_REQUEST,
})


// == Selectors


// == Export
export default matching;