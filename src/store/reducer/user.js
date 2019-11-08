import levelsTable from 'src/data/levels-table';
import wishesTable from 'src/data/wishes-table';

// == Initial State
const initialState = {
  firstName: '',
  lastName: '',
  photo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  githubName: '',
  bio: '',
  levelId: 0,
  location: '',
  wishes: [],
  techs: [],
  wishedId: [0, 3, 8],
  technos: ['ES6', 'JSX', 'React', 'Redux', 'HTML5', 'CSS3'],
  links: [
    { id: 0, title: 'Porfolio', url: 'http://www.regulardesigner.com' },
    { id: 1, title: 'Webibli', url: 'http://www.webibli.fr' },
    { id: 2, title: 'Tindev', url: 'http://tindev.me' },
  ],
  levelsList: levelsTable,
  wishesList: wishesTable,
};

// == Types
export const CHANGE_STATE = 'CHANGE_STATE';
export const GET_MY_INFOS = 'GET_MY_INFOS';
export const GET_TECHS = 'GET_TECHS';
export const SET_TECHS = 'SET_TECHS';
/*
 * CREATE user infos
 * REMOVE user infos
 * UPDATE user infos
 * DELETE user
 *
 * GET user infos
 */

// == Reducer
const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        firstName: action.value.firstName,
        lastName: action.value.lastName,
        photo: action.value.photo,
        pseudo: action.value.githubName,
        bio: action.value.bio,
        levelId: action.value.levelId,
        // location: action.value.location,
        technos: action.value.techs.map((tech) => tech.name),
        wishes: action.value.wishes.map((wish) => wish.name),
        // wishedId: action.value.wishes.id,
        // links: action.value.url,
      };
    case SET_TECHS:
      return {
        ...state,
        techs: action.techs,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeState = (value) => ({
  type: CHANGE_STATE,
  value,
});

export const getMyInfos = () => ({
  type: GET_MY_INFOS,
});

export const getTechs = () => ({
  type: GET_TECHS,
});

export const setTechs = (techs) => ({
  type: SET_TECHS,
  techs,
});
// == Selectors

// == Export
export default user;
