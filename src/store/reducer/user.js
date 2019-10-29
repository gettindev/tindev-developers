import levelsTable from 'src/data/levels-table';
import wishesTable from 'src/data/wishes-table';

// == Initial State
const initialState = {
  firstName: 'Damien',
  lastName: 'Tailhades',
  avatar: 'https://avatars1.githubusercontent.com/u/1433968',
  githubName: 'regulardesigner',
  biography: "I'm a designer trying to become developer after 12 years designing website and mobile apps.",
  level: 1,
  wishes: ['#entraide', '#stafferUnProjet', '#iHaveAnIdea'],
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
const DO_SOMETHING = 'DO_SOMETHING';
export const CHANGE_STATE = 'CHANGE_STATE';
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
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };
    case CHANGE_STATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});

export const changeState = (value) => ({
  type: CHANGE_STATE,
  value
})
// == Selectors


// == Export
export default user;
