// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Import locaux
import HomePage from 'src/components/HomePage'
import MatrixContainer from 'src/containers/Matrix'
import Location from 'src/components/Location'

// == Composant
const Page = ({ logged }) => (
  <div>

    {!logged && (
      <>
        <HomePage />        
      </>
    )}
    {logged && (
      <>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/matrix" exact>
          <MatrixContainer />
        </Route>
        <Route path="/location" exact>
          <Location />
        </Route>
      </>
    )}

  </div>
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Page;
