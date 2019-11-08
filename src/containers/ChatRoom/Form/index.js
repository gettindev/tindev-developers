import { connect } from 'react-redux';


import Form from 'src/components/ChatRoom/Form';

import { addMessage } from 'src/store/reducer/chatroom';

const mapStateToProps = (state) => {
  // console.log('mSTP called, props redistribuées, nouveau cycle de rendu');
  return {
    messageValue: state.chatroom.messageValue,
  };
};

// ecriture
const mapDispatchToProps = (dispatch) => ({
  doChange: (userInput) => {
    const action = {
      type: 'CHANGE_MESSAGE',
      value: userInput,
    };
    dispatch(action);
  },
  addMessage: (message, currentId) => {
    const action = addMessage(message, currentId);
    dispatch(action);
  },
});

// container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// export
export default FormContainer;
