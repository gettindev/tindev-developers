// Import Local
import locs from "src/data/loc.js";

// == Initial State
const initialState = {
  locs, 
  location: "",
};

// == Types
export const SET_USERLOC = 'SET_USERLOC';
export const SEND_DATAS = 'SEND_DATAS';
export const SEND_SETTINGS = 'SEND_SETTINGS';

// == Reducer
const location = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERLOC:
      return {
        ...state,
        location: action.loc,
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

export const sendDatas = (datas, wishes) => ({
  type : SEND_DATAS,
  datas,
  wishes
})

export const sendSettings = (settings, id) => ({
  type : SEND_SETTINGS,
  settings,
  id
})




// == Selectors


// == Export
export default location;