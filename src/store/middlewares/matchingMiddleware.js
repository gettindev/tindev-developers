// Import npm
import axios from 'axios';

// Import actions
import {
 DO_REQUEST, DO_LIKE, DO_UNLIKE, getUsers, userNotFind, setLoadingFalse
} from 'src/store/reducer/matching.js';


const matchingMiddleware = (store) => (next) => (action) => {
  //   console.log('I am the middleware, and I pass this action: ', action);

  switch (action.type) {
    case DO_REQUEST:
      console.log(`Cet utilisteur à l\'id ${action.id}`);
      // Si l'utilisateur on set le state logged à true pour afficher la page mathing
      // Sinon on l'envoi vers la page Matrix
      userNotFind();
      setLoadingFalse();
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
    default:
      next(action);
  }
};

export default matchingMiddleware;
