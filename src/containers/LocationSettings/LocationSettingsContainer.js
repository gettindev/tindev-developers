// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LocationSettings from 'src/components/LocationSettings';

// Action Creators
import { setUserLoc } from 'src/store/reducer/location.js';
import { sendMyLoc } from 'src/store/reducer/userEdit.js';


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
  sendMyLoc: (loc, id) => {
    const action = sendMyLoc(loc, id);
    dispatch(action);
  }

});

// Container
const LocationSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationSettings);

// == Export
export default LocationSettingsContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/