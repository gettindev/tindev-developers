import users from 'src/data/users';
// importer les messages pour modifier le state
// importer la liste des matches pour modifier le state


// == Initial State
const initialState = {
  myMatches: '',
  lastMessages: '',
  // users,
  // conversations,
};

// == Types
export const GET_MATCHES_MESSAGES = 'GET_MATCHES_MESSAGES';
export const UPDATE_CONVERSATIONS = 'UPDATE_CONVERSATIONS';
export const UPDATE_MATCHLIST = 'UPDATE_MATCHLIST';


// == Reducer
const chatlist = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MATCHLIST:
      return {
        ...state,
        myMatches: action.myMatches,
      };
    case UPDATE_CONVERSATIONS:
      return {
        ...state,
        lastMessages: action.lastMessages,
      };

    default:
      return state;
  }
};

// == Action Creators
export const getMatchesAndMessages = () => ({
  type: GET_MATCHES_MESSAGES,
});

export const updateMatchList = (myMatches) => ({
  type: UPDATE_MATCHLIST,
  myMatches,
});

export const updateConversations = (lastMessages) => ({
  type: UPDATE_CONVERSATIONS,
  lastMessages,
});


// == Selectors


// == Export
export default chatlist;
