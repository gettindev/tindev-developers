import users from 'src/data/users';
// importer les messages pour modifier le state
// importer la liste des matches pour modifier le state


// == Initial State
const initialState = {
  mymatches: '',
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
        mymatches: action.mymatches,
      };
    case UPDATE_CONVERSATIONS:
      return {
        ...state,
        conversations: action.conversations,
      };

    default:
      return state;
  }
};

// == Action Creators
export const getMatchesAndMessages = () => ({
  type: GET_MATCHES_MESSAGES,
});

export const updateMatchList = (mymatches) => ({
  type: UPDATE_MATCHLIST,
  mymatches,
});

export const updateConversations = (messages) => ({
  type: UPDATE_CONVERSATIONS,
  messages,
});


// == Selectors


// == Export
export default chatlist;
