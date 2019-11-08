// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MatchPreferences from 'src/components/MatchPreferences';

// Action Creators
import { sendMyWish } from 'src/store/reducer/userEdit';

/* === State (données) === */
const mapStateToProps = (state) => ({
  prefs: state.page.prefs,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  sendMyWish: (wish, id) => {
    const action = sendMyWish(wish, id);
    dispatch(action);
  }
})

// Container
const MatchPreferencesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchPreferences);

// == Export
export default MatchPreferencesContainer;

/* = export on the fly
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/