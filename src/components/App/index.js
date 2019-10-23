// == Import : npm
import React from 'react';

// == Import : style
import './app.scss';

// Import locaux
import messages from 'src/data/messages';
import Nav from 'src/components/Nav';

import Form from 'src/containers/ChatRoom/Form';
import Messages from 'src/containers/ChatRoom/Messages';
import ChatList from 'src/components/ChatList';
import Page from 'src/components/Page';
import MatchingContainer from 'src/containers/MatchingContainer';
import UserMenu from 'src/components/User/Menu';
import EditUserProfil from 'src/components/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';

// == Composant
const App = () => (
  <div className="app">
    {/* <Page logged={true} /> */}
    {/* <ChatList /> */}
    {/* <Messages /> */}
    {/* <Form /> */}
    {/* <MatchingContainer /> */}
    {<UserMenu />}
    {<EditUserProfil />}
    {<ShowUserProfil />}
  </div>
);

// == Export
export default App;
