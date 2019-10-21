import { connect } from 'react-redux';


import Form from 'src/components/ChatRoom/Form';


const mapStateToProps = (state) => {
  console.log('mSTP called, props redistribuées, nouveau cycle de rendu');
  return {
    messageValue: state.chatroom.messageValue,
  };
};

// ecriture
const mapDispatchToProps = (dispatch) => {
  return {
    doChange: () => {
      dispatch({
        type: 'CHANGE_MESSAGE',
      });
    },
  };
};

// container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// export
export default FormContainer;
