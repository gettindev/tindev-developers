// Import npm
import axios from 'axios';

// Import actions
import { GET_MY_INFOS, GET_TECHS, setTechs, changeState, getMyInfos } from 'src/store/reducer/user';
import { SEND_REQUEST, SEND_MY_WISH, SEND_MY_LOC } from 'src/store/reducer/userEdit.js';

const userEditMiddleware = (store) => (next) => (action) => {

  // console.log('I am the middleware, and I pass this action: ', action);
  
  switch (action.type) {
    case GET_MY_INFOS:
      const id = localStorage.getItem('id');
      axios.get(`http://localhost:3001/profil/${id}`)
        .then((response) => {
          console.log(response.data);
          store.dispatch(changeState(response.data));
        })
        .catch((error) => {
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
          // console.log('ALORS >>>>>>', response.config.data);
          store.dispatch(getMyInfos());
          store.dispatch(changeState(response.config.data));
        }).catch((error) => {
          console.error(error);
        }).finally(() => {
      });
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
        case GET_TECHS:
            axios.get(`http://localhost:3001/tech/`)
              .then((response) => {
              store.dispatch(setTechs(response.data));
              console.log('TECHS RESPONSE: ', response.data);
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
