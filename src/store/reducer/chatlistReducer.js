import users from 'src/data/users';
// importer les messages pour modifier le state
// importer la liste des matches pour modifier le state


// == Initial State
const initialState = {
  users,
  // conversations,
  // matchlist
};

// == Types
export const GET_MATCHES_MESSAGES = 'GET_MATCHES_MESSAGES';
export const UPDATE_CONVERSATIONS = 'UPDATE_CONVERSATIONS';
export const UPDATE_MATCHLIST = 'UPDATE_MATCHLIST';


// == Reducer
const chatlist = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      return {
        ...state,
        conversations: action.conversations,
      };

    case UPDATE_MATCHLIST:
      return {
        ...state,
        matchlist: action.matchList,
      };
    default:
      return state;
  }
};

// == Action Creators
export const getMatchesAndMessages = () => ({
  type: GET_MATCHES_MESSAGES,
});

export const updateConversations = (conversations) => ({
  type: UPDATE_CONVERSATIONS,
  conversations,
});

export const updateMatchList = (matchList) => ({
  type: UPDATE_MATCHLIST,
  matchList,
});


// == Selectors


// == Export
export default chatlist;
