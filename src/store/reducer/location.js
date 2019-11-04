// Import Local
import locs from "src/data/loc.js";

// == Initial State
const initialState = {
  locs, 
  userLoc: "",
};

// == Types
export const SET_USERLOC = 'SET_USERLOC';
export const SEND_DATAS = 'SEND_DATAS';

// == Reducer
const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERLOC:
      return {
        ...state,
        userLoc: action.loc,
      };
    default:
      return state;
  }
};

// == Action Creators
export const setUserLoc = (loc) => ({
  type: SET_USERLOC,
  loc,
});

export const sendDatas = (datas) => ({
  type : SEND_DATAS,
  datas,
})



// == Selectors


// == Export
export default location;