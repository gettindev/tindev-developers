import { connect } from 'react-redux';


import Form from 'src/components/ChatRoom/Form';


const mapStateToProps = (state) => {
  console.log('mSTP called, props redistribuées, nouveau cycle de rendu');
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
  sendMessage: () => {
    const action = {
      type: 'ADD_MESSAGE',
    };
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
