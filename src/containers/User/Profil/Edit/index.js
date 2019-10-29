// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import EditUserProfil from 'src/components/User/Profil/Edit';

// Action Creators
import { sendRequest } from 'src/store/reducer/userEdit';


const mapStateToProps = (state, ownProps) => ({
  //**** get the state of UserCOntainer, nott EditUserContainer ****/
  currentUser: state.user,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  sendRequest: () => {
    const action = sendRequest();
    dispatch(action);
  },
});

// Container
const EditUserProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserProfil);

// == Export
export default EditUserProfilContainer;
