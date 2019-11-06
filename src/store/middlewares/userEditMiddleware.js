// Import npm
import axios from 'axios';

// Import actions
import { SEND_REQUEST } from 'src/store/reducer/userEdit.js';
import { GET_MY_INFOS, changeState, getMyInfos } from 'src/store/reducer/user';

const userEditMiddleware = (store) => (next) => (action) => {

  console.log('I am the middleware, and I pass this action: ', action);
  
  switch (action.type) {
    case GET_MY_INFOS:
      const id = localStorage.getItem('id');
      axios.get(`http://localhost:3001/profil/${id}`)
        .then((response) => {
          console.log(response.data)
          store.dispatch(changeState(response.data));
        }).catch((error) => {
          console.error(error);
        }).finally(() => {
      });
      break;
    case SEND_REQUEST:
      console.log("Une requête Ajax est envoyée pour mettre à jour la BDD");
      const value = action.userDatas;
      const myId = localStorage.getItem('id');
      console.log(myId);
      axios.put(`http://localhost:3001/profil/${myId}`, {
        ...value,
      })
        .then((response) => {
          console.log('ALORS >>>>>>', response.config.data);
          store.dispatch(getMyInfos());
        }).catch((error) => {
          console.error(error);
        }).finally(() => {
      });
      break;
  default:
    next(action);
  }
};

export default userEditMiddleware;
