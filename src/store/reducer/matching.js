// Import data
import  user  from 'src/data/user.js';

// == Initial State
const initialState = {
  users : user,
  loading: false,
};

// == Types
export const DO_SOMETHING = 'DO_SOMETHING';
export const GET_USERS = 'GET_USERS;';
export const DO_REQUEST = 'DO_REQUEST';
export const DO_LIKE = 'DO_LIKE';
export const DO_UNLIKE = 'DO_UNLIKE';
export const USER_NOT_FIND = 'USER_NOT_FIND';
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
export const SET_USERS = 'SET_USERS';

// == Reducer
const matching = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };
    case USER_NOT_FIND:
      return {
        ...state,
      find: false,
      }
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true
      }
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      }
    case SET_USERS:
      return {
        ...state,
        users: actions.users
      }
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

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const doRequest = id => ({
  type: DO_REQUEST,
  id,
})

export const userNotFind = () => ({
  type: USER_NOT_FIND,
})

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE
})

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE
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