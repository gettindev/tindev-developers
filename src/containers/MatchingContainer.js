// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Matching from 'src/components/Matching';

// Action Creators
import { doRequest } from 'src/store/reducer/matching.js';


/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = ( state ) => ({
      users: state.matching.users,
});

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = ( dispatch ) => ({
  doRequest: () => {
      const action = doRequest();
      dispatch(action);
  }
});

// Container
const MatchingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matching);

// == Export
export default MatchingContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/