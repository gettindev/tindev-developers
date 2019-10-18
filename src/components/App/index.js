// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import UserProfil from 'src/components/UserProfil';
import EditUserProfil from 'src/components/UserProfil/EditUserProfil';

// == Composant
const App = () => (
  <div className="app">
    <EditUserProfil />
  </div>
);

// == Export
export default App;
