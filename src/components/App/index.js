// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
// import Nav from 'src/components/Nav';
import HomePage from 'src/components/HomePage'

// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    <HomePage />
  </div>
);

// == Export
export default App;
