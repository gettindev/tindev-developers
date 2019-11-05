// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Loc from 'src/components/Location';

// Action Creators
import { setUserLoc, sendDatas, sendSettings  } from 'src/store/reducer/location.js';
import { setLog } from 'src/store/reducer/app.js';


/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = ( state ) => ({
      locs: state.location.locs,
      location: state.location.location,
      datas: state.page.datas,
});

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = ( dispatch ) => ({
  setUserLoc: (loc) => {
      const action = setUserLoc(loc);
      dispatch(action);
  },

  sendDatas: (datas, wishes) => {
    const action = sendDatas(datas, wishes);
    dispatch(action);
  },

  setLog: (bool) => {
    const action = setLog(bool);
    dispatch(action);
  },

  sendSettings: (settings, id) => {
    const action = sendSettings(settings, id);
    dispatch(action);
  },

});

// Container
const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loc);

// == Export
export default LocationContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/