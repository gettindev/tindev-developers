// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Menu from 'src/components/User/Menu';

// Action Creators
import { setUserLoc, sendDatas  } from 'src/store/reducer/location.js';
import { setLog } from 'src/store/reducer/app.js';


/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = null;

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = ( dispatch ) => ({
  
  setLog: (bool) => {
    const action = setLog(bool);
    dispatch(action);
  }

});

// Container
const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

// == Export
export default MenuContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/