// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from './reducer';
import { websocketConnect } from './reducer/chatroom';
import matchingMiddleware from './middlewares/matchingMiddleware';
import socketMiddleware from './middlewares/socketMiddleware';
import userEditMiddleware from './middlewares/userEditMiddleware';
import locationMiddleware from './middlewares/locationMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    matchingMiddleware,
    socketMiddleware,
    locationMiddleware,
    userEditMiddleware,
  ),
);

const store = createStore(
  reducer,
  // initialState,
  enhancers,
);


store.dispatch(websocketConnect());

// == Export
export default store;
