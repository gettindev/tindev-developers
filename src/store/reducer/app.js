// == Initial State
const initialState = {
  log: false,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
export const GET_ALL_DATAS = 'GET_ALL_DATAS';
export const SEND_DATAS = 'SEND_DATAS';
export const SET_LOG = 'SET_LOG';

// == Reducer
const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOG:
      return {
        ...state,
        log: action.bool
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

export const getAllDatas = () => ({
  type: GET_ALL_DATAS,
});

export const sendDatas = () => ({
  type : SEND_DATAS,
})

export const setLog = (bool) => ({
  type : SET_LOG,
  bool,
})

// == Selectors


// == Export
export default app;
