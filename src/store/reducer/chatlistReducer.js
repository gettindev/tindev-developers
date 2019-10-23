import users from 'src/data/users';

// == Initial State
const initialState = {
  users,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const chatlist = (state = initialState, action = {}) => {
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
export const doSomething = (message) => ({
  type: DO_SOMETHING,
  message,
});


// == Selectors


// == Export
export default chatlist;
