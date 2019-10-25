// Import data
import  user  from 'src/data/user.js';

// == Initial State
const initialState = {
  users : user,
};

// == Types
export const DO_SOMETHING = 'DO_SOMETHING';
export const GET_USERS = 'GET_USERS;';
export const DO_REQUEST = 'DO_REQUEST';
export const DO_LIKE = 'DO_LIKE';
export const DO_UNLIKE = 'DO_UNLIKE';

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

export const doLike = () => ({
  type: DO_LIKE,
})

export const doUnlike = () => ({
  type: DO_UNLIKE,
})


// == Selectors


// == Export
export default matching;