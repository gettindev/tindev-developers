// == Initial State
const initialState = {
  message: 'Hello',
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
export const SEND_REQUEST = 'SEND_REQUEST';


// == Reducer
const userEdit = (state = initialState, action = {}) => {
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
})

export const sendRequest = (userDatas) => ({
  type: SEND_REQUEST,
  userDatas,
})



// == Selectors


// == Export
export default userEdit;