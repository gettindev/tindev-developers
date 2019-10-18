// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// Import locaux
import Nav from 'src/components/Nav';
import HomePage from 'src/components/HomePage'
import Matrix from 'src/components/Matrix'

// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    {/* <HomePage /> */}
    <Matrix />
  </div>
);

// == Export
export default App;
