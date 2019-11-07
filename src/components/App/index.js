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
import UserMenu from 'src/containers/User/Menu';
import EditUserProfil from 'src/containers/User/Profil/Edit';
import ShowUserProfil from 'src/containers/User/Profil/Show';
import NotFound from 'src/components/404/index';
import Location from 'src/containers/Location/LocationContainer';
import TermsOfUse from 'src/components/TermsOfUse';
import HelpAndAssistance from 'src/components/HelpAndAssistance';
import AccountReporting from 'src/components/AccountReporting';
import MatchPreferences from 'src/components/MatchPreferences';

// Import all Nav Components
import Nav from 'src/components/Nav';
import NavBackLeft from 'src/components/Nav/NavBackLeft.js';
import NavChat from 'src/components/Nav/NavChat.js';
import NavBackRight from 'src/components/Nav/NavBackRight.js';
import NavCloseRight from 'src/components/Nav/NavCloseRight.js';
import NavCloseRightLogo from 'src/components/Nav/NavCloseRightLogo.js';


// == Composant
const App = ({ logged, doRequest}) => {

  // // CDM - send Axios Request if User logged
  // useEffect(() => {
  //   console.log("Le Dom est créé");
  //     doRequest();
  // }, []);

  useEffect(() => {
    
  }, [logged = localStorage.getItem("logged") ? true : null]);

  return (
  <div className="app">
      
        {!logged &&
        <>
          <Switch>
            <Route exact path="/">
              <Page doRequest={doRequest} find={find} />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route >
              <NotFound logged={logged}/>
            </Route>
          </Switch>
        </>
        }
        {logged && 
        <>
          <Switch>
            <Route exact path ="/profil">
              <NavBackRight />
              <UserMenu />
            </Route>
            <Route exact path ="/profil/edit">
              <NavCloseRight title="Éditer mon profil"/>
              <EditUserProfil />
            </Route>
            <Route exact path ="/profil/show">
              <NavCloseRight title="Mon Profil" />
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
            <Route exact path ="/reporting">
              <Nav />
              <AccountReporting />             
            </Route>  
            <Route exact path ="/preferences">
            <NavCloseRightLogo />
              <MatchPreferences />             
            </Route>      
            <Route >
              <NotFound logged={logged}/>
            </Route>
          </Switch>
        </>
        }
  </div>
  )};


// == Export
export default App;
