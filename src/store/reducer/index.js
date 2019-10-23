// Here i will find the parent reducer in which i am going to combine my reducers

// redux provided a combineReducers function that combines multiple reducer into one
import { combineReducers } from 'redux';

// we import each of the sub-reducers
import matchlistReducer from './matchlistReducer';
import chatlistReducer from './chatlistReducer';
import matching from './matching';
import home from './home';
import matrix from './matrixReducer';
import user from './user';

// combineReducers returns us the generated parent reducer
// we must supply an object as parameter
// with a given name given to each reducer and in value, each function reducer
// https://redux.js.org/api/combinereducers

const reducer = combineReducers({
  matchlistReducer,
  chatlistReducer,
  matching,
  home,
  matrix,
  user,
});

export default reducer;
