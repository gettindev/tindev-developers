// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Example from 'src/components/Example';

// Action Creators
import { doSomething } from 'src/store/reducer';

/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
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
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

// == Export
export default ExampleContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/