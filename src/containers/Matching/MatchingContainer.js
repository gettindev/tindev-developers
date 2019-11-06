// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Matching from 'src/components/Matching';

// Action Creators
import {
  doRequest, doLike, doUnlike, getUsers, setUsers
} from 'src/store/reducer/matching.js';

import { sendRequest } from 'src/store/reducer/userEdit';

import { getMyInfos } from 'src/store/reducer/user';

import { getMatchesAndMessages, fetchMessages } from 'src/store/reducer/chatlistReducer';

/* === State (datas) ===
 * - mapStateToProps retrieves a prop object for the presentation component
 * - mapStateToProps make available 2 params
 *  - state : the state of the store (getState)
 *  - ownProps : the props passed to the container
 * No need transfer data ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  users: state.matching.users,
});

/* === Actions ===
 * - mapDispatchToProps retrieves a prop object for the presentation component
 * - mapDispatchToProps make available 2 params
 *  - dispatch : the function of the blind to dispatcher an action
 *  - ownProps : the props passed to the container
 * No need transfer dispatch ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  doRequest: () => {
    const action = doRequest();
    dispatch(action);
  },

  getMyInfos: () => {
    const action = getMyInfos();
    dispatch(action);
  },

  doLike: (currentUserId, swipeId) => {
    const action = doLike(currentUserId, swipeId);
    dispatch(action);
  },
  doUnlike: (currentUserId, swipeId) => {
    const action = doUnlike(currentUserId, swipeId);
    dispatch(action);
  },
  getUsers: () => {
    const action = getUsers();
    dispatch(action);
  },

  setUsers: (newUsers) => {
    const action = setUsers(newUsers);
    dispatch(action);
  },
  sendRequest: (currentUserDatas) => {
    const action = sendRequest(currentUserDatas);
    dispatch(action);
  },
  getMatchesAndMessages: () => {
    const action = getMatchesAndMessages();
    dispatch(action);
  },
  fetchMessages: () => {
    const action = fetchMessages();
    dispatch(action);
  },
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
