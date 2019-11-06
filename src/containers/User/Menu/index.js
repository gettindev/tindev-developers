// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UserMenu from 'src/components/User/Menu';

// Action Creators
const mapStateToProps = (state) => ({
  user: state.user,
});


const mapDispatchToProps = {};

// Container
const UserMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMenu);

// == Export
export default UserMenuContainer;
