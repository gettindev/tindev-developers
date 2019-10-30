// Import
import prefs from 'src/data/matchPreferences.js';

// == Initial State
const initialState = {
  prefs: prefs,
  step : 0,
  
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const page = (state = initialState, action = {}) => {
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
export default page;