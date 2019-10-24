// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : style
import './app.scss';

// Import locaux
import messages from 'src/data/messages';

import Form from 'src/containers/ChatRoom/Form';
import Messages from 'src/containers/ChatRoom/Messages';
import ChatList from 'src/components/ChatList';
import Page from 'src/components/Page';
import MatchingContainer from 'src/containers/MatchingContainer';
import UserMenu from 'src/components/User/Menu';
import EditUserProfil from 'src/components/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';
import Nav from 'src/components/Nav';

// == Composant
const App = () => (
  <div className="app">
    {/*<Page logged={true} />*/}
    {/* <Messages /> */}
    {/* <Form /> */}
    <Nav nav="logo" />
    <Switch >
      <Route exact path="/projet-Tinder-developper/dist/">
        <Page />
      </Route>
      <Route exact path ="/projet-Tinder-developper/dist/1">
        <UserMenu />
      </Route>
      <Route exact path ="/projet-Tinder-developper/dist/2">
        <EditUserProfil />
      </Route>
      <Route exact path ="/projet-Tinder-developper/dist/3">
        <ShowUserProfil />
      </Route>
      <Route exact path="/projet-Tinder-developper/dist/4">
        <MatchingContainer />
      </Route>
      <Route exact path ="/projet-Tinder-developper/dist/5">
        <ChatList />
      </Route>
      <Route exact path ="/projet-Tinder-developper/dist/6">
        <Messages />
      </Route>
    {/* <UserMenu /> */}
    {/* <EditUserProfil /> */}
    {/* <ShowUserProfil /> */}
    </Switch>
  </div>
);

// == Export
export default App;
