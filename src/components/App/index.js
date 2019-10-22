// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// Import locaux
import Page from 'src/components/Page';

// == Composant
const App = () => (
  <div className="app">
    <Page logged={true} />
  </div>
);

// == Export
export default App;
