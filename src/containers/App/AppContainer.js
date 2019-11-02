// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { doRequest, setLoadingTrue, setLoadingFalse } from 'src/store/reducer/matching.js';


/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = ( state ) => ({
      logged: state.app.log, // A changer par le state de matrix pour avoir le statut
      find: state.matching.find,
      loading : state.matching.loading,
});

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = ( dispatch ) => ({
  doRequest: (id) => {
      const action = doRequest(id);
      dispatch(action);
  },

  setLoadingFalse: () => {
      dispatch(setLoadingFalse());
  },

  setLoadingTrue: () => {
      dispatch(setLoadingTrue());
  }
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/