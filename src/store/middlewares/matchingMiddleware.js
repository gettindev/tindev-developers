// Import npm
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import actions
import {
 DO_REQUEST, DO_LIKE, DO_UNLIKE, getUsers, userNotFind, setLoadingFalse, GET_USERS, setUsers
} from 'src/store/reducer/matching.js';
import { GET_USERFIND } from 'src/store/reducer/pageReducer';
import { setLog } from 'src/store/reducer/app.js';
import { SEND_DATAS, SEND_SETTINGS, sendGo } from 'src/store/reducer/location.js';

const matchingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_REQUEST:
      //console.log(`Cet utilisteur à l\'id ${action.id}`);
      // Si l'utilisateur on set le state logged à true pour afficher la page mathing
      // Sinon on l'envoi vers la page Matrix
      break;
    case GET_USERFIND:
      console.log(`Cet utilisteur à le mail ${action.email}`)
      axios.post('http://localhost:3001/profil/exist', {
      mail: action.email
      }).then((response) => {
              if (response.data.length ) {
                return (
                  store.dispatch(setLog(true)),
                  localStorage.setItem('logged', true),
                  // Ajouter la valeur de son ID dans le localStorage
                  localStorage.setItem('id', response.data[0].id),
                  window.location.replace("/matching")
                )
              } else
            return (
              store.dispatch(userNotFind()),
              store.dispatch(setLoadingFalse())
            )
            }).catch((error) => {
            console.error(error);
            }).finally(() => {
              
             });
      // userNotFind();
      // setLoadingFalse();
      break;
      case DO_LIKE:
      console.log('Cet utilisateur est envoyé dans mes profils likés');
      // axios.get('http://localhost:3001/profil')
      // .then((response) => {
      //       console.log('succès', response.data);
      //       // je veux faire en sorte d'alimenter le state avec la réponse
      //       })
      //       .catch((error) => {
      //       console.error(error);
      //       })
      //       .finally(() => {
      //       });
      break;
    case DO_UNLIKE:
      console.log('Cet utilisateur est envoyé dans mes profils Dislikés');
      break;
    case GET_USERS:
      console.log('J\'obtiens de nouveaux profils et je les envoient dans le state');
      // axios.get('http://localhost:3001/profil')
      // .then((response) => {
      //       console.log('succès', response.data);
      //       // je veux faire en sorte d'alimenter le state avec la réponse
      //       setUsers(response)
      //       })
      //       .catch((error) => {
      //       console.error(error);
      //       })
      //       .finally(() => {
      //       });
      break;
    case SEND_DATAS:
        console.log('j\'envois les données', action.datas);
        const wishes = action.wishes;
        console.log(wishes);
        axios.post('http://localhost:3001/profil', {
           ...action.datas
       }).then((response) => {
            console.log('succès', response.data.id);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('logged', true);
            //store.dispatch(sendGo(response.data.id));
            axios.post(`http://localhost:3001/profil/settings/${response.data.id}`, {wishesArray:wishes});
            window.location.replace("/matching")
            })
            .catch((error) => {
            console.error(error);
            })
            .finally(() => {
            });
      break;
    case SEND_SETTINGS :
          
          console.log("j'envois les nouvelles settings", action.settings, action.id);
          axios.post(`http://localhost:3001/profil/settings/${action.id}`, {

            wishesArray: action.settings

          }).then((response) => {
            console.log('succès de send settings', response);
            // je veux faire en sorte d'alimenter le state avec la réponse
            })
            .catch((error) => {
            console.error(error);
            })
            .finally(() => {
            });
        
    default:
      next(action);
  }
};

export default matchingMiddleware;
