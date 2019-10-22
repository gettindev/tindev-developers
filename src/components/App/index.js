// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import MatchingContainer from 'src/containers/MatchingContainer';

// == Composant
const App = () => (
  <div className="app">
    <MatchingContainer />
  </div>
);

// == Export
export default App;
