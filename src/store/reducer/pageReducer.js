// Import
import prefs from 'src/data/matchPreferences.js';

// == Initial State
const initialState = {
  prefs: prefs,
  datas: [],
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const GET_DATAS = 'GET_DATAS';

// == Reducer
const page = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        datas: action.datas,
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

export const getDatas = (datas) => ({
  type: GET_DATAS,
  datas,
})


// == Selectors


// == Export
export default page;