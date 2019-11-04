// Import npm
import axios from 'axios';

// Import actions
import { SEND_DATAS } from 'src/store/reducer/location.js';

const locationMiddleware = (store) => (next) => (action) => {
  //   console.log('I am the middleware, and I pass this action: ', action);

  switch (action.type) {
    case SEND_DATAS:
      console.log(action.datas);
      break;
    default:
      next(action);
  }
};

export default locationMiddleware;
