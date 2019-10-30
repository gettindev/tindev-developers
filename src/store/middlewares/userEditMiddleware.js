// Import npm
import axios from 'axios';

// Import actions
import { SEND_REQUEST } from 'src/store/reducer/userEdit.js';
import { changeState } from 'src/store/reducer/user';

const userEditMiddleware = (store) => (next) => (action) => {

  console.log('I am the middleware, and I pass this action: ', action);
  
  switch (action.type) {
      case SEND_REQUEST:
            console.log("Une requête Ajax est envoyée pour mettre à jour la BDD");
            break;
       default:
          next(action);
  }
};

export default userEditMiddleware;