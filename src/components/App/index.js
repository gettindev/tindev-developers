// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import UserMenu from 'src/components/User/Menu';
import UserProfilEdit from 'src/components/User/Profil/Edit';
// import EditUserProfil from 'src/components/UserProfil/EditUserProfil';

// == Composant
const App = () => (
  <div className="app">
    <UserProfilEdit />
  </div>
);

// == Export
export default App;
