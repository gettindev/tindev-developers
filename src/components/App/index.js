// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import Nav from 'src/components/Nav';
import UserProfil from 'src/components/UserProfil';

// == Composant
const App = () => (
  <div className="app">
    <UserProfil />
    <Nav />
  </div>
);

// == Export
export default App;
