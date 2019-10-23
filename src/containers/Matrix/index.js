// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Matrix from 'src/components/Matrix';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  prefs: state.matrix.prefs,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const MatrixContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matrix);

// == Export
export default MatrixContainer;