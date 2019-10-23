// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MatchList from 'src/components/ChatList/MatchList';

// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  users: state.matchlistReducer.users,
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
const MatchListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchList);

// == Export
export default MatchListContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
