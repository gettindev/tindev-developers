import { connect } from 'react-redux';

import Message from 'src/components/ChatRoom/Messages/Message';

import { isMe } from 'src/store/selectors';

const mapStateToProps = (state, ownProps) => ({
  isMe: isMe(ownProps.author, state.chatroom.currentUser),
});

const mapDispatchToProps = {};

const MessageDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default MessageDetailContainer;
