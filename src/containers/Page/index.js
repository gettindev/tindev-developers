// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

// Action Creators
import { getDatas } from 'src/store/reducer/pageReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  prefs: state.page.prefs,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getDatas: (datas) => {
    console.log(datas);
    const action = getDatas(datas);
    dispatch(action);
  },
  setLogFB: (bool) => {
    console.log(bool);
  }
});

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;