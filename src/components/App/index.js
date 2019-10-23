// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// Import locaux
import Page from 'src/components/Page';
import MatchingContainer from 'src/containers/MatchingContainer';
import UserMenu from 'src/components/User/Menu';
import EditUserProfil from 'src/components/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';
// import EditUserProfil from 'src/components/UserProfil/EditUserProfil';

// == Composant
const App = () => (
  <div className="app">
    <Page logged={true} />
    {/* <MatchingContainer /> */}
    {/* <UserMenu /> */}
    {/* <EditUserProfil /> */}
    {/* <ShowUserProfil /> */}
  </div>
);

// == Export
export default App;
