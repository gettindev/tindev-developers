import connectedUserData from 'src/data/user-info';

// == Initial State
const initialState = {
  ...connectedUserData,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const user = (state = initialState, action = {}) => {
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


// == Selectors


// == Export
export default user;
