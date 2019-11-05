// == Import : npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : style
import './app.scss';

// Import locaux
import messages from 'src/data/messages';

// Import Unique Components
import Form from 'src/containers/ChatRoom/Form';
import Matrix from 'src/components/Matrix';
import Messages from 'src/containers/ChatRoom/Messages';
import ChatList from 'src/containers/ChatList';
import Page from 'src/containers/Page';
import MatchingContainer from 'src/containers/Matching/MatchingContainer';
import UserMenu from 'src/containers/Menu/index.js';
import EditUserProfil from 'src/containers/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';
import NotFound from 'src/components/404/index';
import Location from 'src/containers/Location/LocationContainer';
import TermsOfUse from 'src/components/TermsOfUse';
import HelpAndAssistance from 'src/components/HelpAndAssistance';

// Import all Nav Components
import Nav from 'src/components/Nav';
import NavBackLeft from 'src/components/Nav/NavBackLeft.js';
import NavChat from 'src/components/Nav/NavChat.js';
import NavBackRight from 'src/components/Nav/NavBackRight.js';
import NavCloseRight from 'src/components/Nav/NavCloseRight.js';


// == Composant
const App = ({ logged, doRequest, find, loading}) => {

  // // CDM - send Axios Request if User logged
  // useEffect(() => {
  //   console.log("Le Dom est créé");
  //     doRequest();
  // }, []);

  return (
  <div className="app">
      
        {!logged &&
        <>
          <Switch>
            <Route exact path="/">
              <Page doRequest={doRequest} find={find} loading={loading}/>
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route >
              <NotFound />
            </Route>
          </Switch>
        </>
        }
        {logged && 
        <>
          <Switch>
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
            <Route exact path ="/chat/:id">
              <NavChat title="toto" />
              <Messages />
              <Form />
            </Route>
            <Route exact path ="/termsOfUse">
              <Nav />
              <TermsOfUse />             
            </Route>
            <Route exact path ="/help">
              <Nav />
              <HelpAndAssistance />             
            </Route>
            <Route path="/:slug">
              <NotFound />
            </Route>
          </Switch>
        </>
        }
  </div>
  )};


// == Export
export default App;
