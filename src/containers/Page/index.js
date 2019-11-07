// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

// Action Creators
import { getDatas, getUserFind } from 'src/store/reducer/pageReducer';
import { setLoadingTrue, setLoadingFalse } from 'src/store/reducer/matching.js';

/* === State (données) === */
const mapStateToProps = (state) => ({
  prefs: state.page.prefs,
  loading : state.matching.loading,
  find: state.matching.find,
  link : state.matching.link,
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
  },

  getUserFind: (email) => {
    const action = getUserFind(email);
    dispatch(action);
  },

  setLoadingFalse: () => {
    const action = setLoadingFalse()
    dispatch(action);
  },

  setLoadingTrue: () => {
    const action = setLoadingTrue()
    dispatch(action);
  }
});

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;