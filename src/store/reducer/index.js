// Here i will find the parent reducer in which i am going to combine my reducers

// redux provided a combineReducers function that combines multiple reducer into one
import { combineReducers } from 'redux';

// we import each of the sub-reducers
// import user from './user';
import chatroom from './chatroom';
import matchlistReducer from './matchlistReducer';
import chatlistReducer from './chatlistReducer';
import matching from './matching';
import home from './home';
import user from './user';
import userEdit from './user';
import app from './app';
import page from './pageReducer';

// combineReducers returns us the generated parent reducer
// we must supply an object as parameter
// with a given name given to each reducer and in value, each function reducer
// https://redux.js.org/api/combinereducers

const reducer = combineReducers({
  chatroom,
  matchlistReducer,
  chatlistReducer,
  matching,
  home,
  user,
  userEdit,
  app,
  page,
});

export default reducer;
