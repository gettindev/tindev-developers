// == Initial State
const initialState = {
    logged: true,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
export const GET_ALL_DATAS = 'GET_ALL_DATAS';

// == Reducer
const app = (state = initialState, action = {}) => {
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

export const getAllDatas = () => ({
  type: GET_ALL_DATAS,
});

// == Selectors


// == Export
export default app;