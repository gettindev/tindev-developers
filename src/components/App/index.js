// == Import : npm
import React, { Component } from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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
import HomePage from 'src/components/HomePage';

firebase.initializeApp({
  apiKey: "AIzaSyDcu5HQXGajTZwTV3oGNbb2mwpQU-cSbSA",
  authDomain: "tindev-a9966.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn : false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = ()=> {
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log(user);
    })

  }

  render() {
    return (
      <div className="app">
        {this.state.isSignedIn ? (
          <UserMenu />
        ) : (
          <>
          <HomePage />
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            className="gitHubButton"
          />  
          </>
        )}
      </div>
    )
  }
}

// == Export
export default App;


// notre composant App initial

// // == Composant
// const App = () => (
//   <div className="app">
//     {/* {<Page logged={true} />} */}
//     {/* <Messages /> */}
//     {/* <Form /> */}
//     {/* <MatchingContainer /> */}
//     {/* <UserMenu /> */}
//     {/* <EditUserProfil /> */}
//     {/* <ShowUserProfil /> */}
//   </div>
// );

        // exemple de page de bienvenue avec pseudo et avatar Git hub
          // <span>
          //   <div>Signed In!</div>
          //   <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          //   <h2>Welcome {firebase.auth().currentUser.displayName}</h2>
          //   <img alt="profile picture" src={firebase.auth().currentUser.photoURL}></img>
          // </span>