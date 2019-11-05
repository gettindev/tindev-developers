// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ShowUserProfil from 'src/components/User/Profil/Show';

// Action Creators
// import { doSomething } from 'src/store/reducer/user';

/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
});

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
  },
});

// Container
const ShowUserProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowUserProfil);

// == Export
export default ShowUserProfilContainer;
