// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : style
import './app.scss';

// Import locaux
import messages from 'src/data/messages';

// Import Unique Components
import Form from 'src/containers/ChatRoom/Form';
import Messages from 'src/containers/ChatRoom/Messages';
import ChatList from 'src/components/ChatList';
import Page from 'src/components/Page';
import MatchingContainer from 'src/containers/MatchingContainer';
import UserMenu from 'src/components/User/Menu';
import EditUserProfil from 'src/components/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';

// Import all Nav Components
import Nav from 'src/components/Nav';
import NavBackLeft from 'src/components/Nav/NavBackLeft.js';
import NavChat from 'src/components/Nav/NavChat.js';
import NavBackRight from 'src/components/Nav/NavBackRight.js';
import NavCloseRight from 'src/components/Nav/NavCloseRight.js';

// == Composant
const App = () => (
  <div className="app">
    <>
      <Switch > 
        <Route exact path ="/profil">
          <NavBackRight/>
          <UserMenu />
        </Route>
        <Route exact path ="/profil/edit">
          <NavCloseRight title="Éditer mon profil"/>
          <EditUserProfil />
        </Route>
        <Route exact path ="/profil/show">
          <Nav />
          <ShowUserProfil />
        </Route>
        <Route exact path="/matching">
            <Nav />
            <MatchingContainer />
        </Route>
        <Route exact path ="/chat">
          <NavBackLeft/>
          <ChatList />
        </Route>
        <Route exact path ="/chat/1">
          <NavChat />
          <Messages />
          <Form />
        </Route>
      </Switch>
    </>
      <Route exact path="/">
        <Page logged />
      </Route>
  </div>
);

// == Export
export default App;

