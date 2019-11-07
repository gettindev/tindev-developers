// Import npm
import axios from 'axios';

// Import actions
import { SEND_REQUEST, SEND_MY_WISH, SEND_MY_LOC } from 'src/store/reducer/userEdit.js';
import { GET_MY_INFOS, changeState } from 'src/store/reducer/user';

const userEditMiddleware = (store) => (next) => (action) => {

  // console.log('I am the middleware, and I pass this action: ', action);
  
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
            // Si j'utilise changeState ici, la mise à jour ne se fait pas....
            console.log(value);
            break;
      case SEND_MY_WISH:
            console.log("les wishes que j'envois", action.wish, "je suis l'id:", action.id)
            // axios.post(`http://localhost:3001/profil/settings/wishes`, {
            //     whishes: action.wish,
            //     currentId : action.id,
            // })
            //   .then((response) => {
            //   console.log(response.data)
            //   store.dispatch(changeState(response.data));
            //   }).catch((error) => {
            //   console.error(error);
            //   }).finally(() => {
                
            //   });
            break;
      case SEND_MY_LOC:
            console.log("Ma localisation", action.loc, "je suis l'id:", action.id)
            // axios.post(`http://localhost:3001/profil/settings/location`, {
            //     location: action.loc,
            //     currentId : action.id,
            // })
            //   .then((response) => {
            //   console.log(response.data)
            //   store.dispatch(changeState(response.data));
            //   }).catch((error) => {
            //   console.error(error);
            //   }).finally(() => {
            
            //   });
            break; 
       default:
          next(action);
  }
};

export default userEditMiddleware;
