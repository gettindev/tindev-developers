/* eslint-disable import/no-cycle */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Messages from 'src/components/ChatRoom/Messages';

import { fetchMessages, updateMessages } from 'src/store/reducer/chatroom';

const mapStateToProps = (state) => {
  console.log('console.log du state:', state.chatroom.messages);
  return {
    messages: state.chatroom.messages,
    currentUser: state.chatroom.currentUser,
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (currentId, userId) => {
    const action = fetchMessages(currentId, userId);
    dispatch(action);
  },
  updateMessages: (messages) => {
    const action = updateMessages(messages);
    dispatch(action);
  },
});

// Container
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

// == Export
export default MessagesContainer;
