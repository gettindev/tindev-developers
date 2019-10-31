// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

// Import locaux
import HomePage from 'src/components/HomePage'
import MatrixContainer from 'src/containers/Matrix'
import Location from 'src/components/Location'
import UserProfil from 'src/components/User/Menu';

// == initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDcu5HQXGajTZwTV3oGNbb2mwpQU-cSbSA",
  authDomain: "tindev-a9966.firebaseapp.com"
})

// == Composant
class Page extends Component {
  state = { isSignedIn : false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => <MatrixContainer />
    }
  }

  componentDidMount = () => {
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log(user);
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (

          <>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/matrix" exact>
            <MatrixContainer />
          </Route>
          <Route path="/location" exact>
            <Location />
          </Route>
          <Route path="/show" exact>
            <UserProfil />
          </Route>
          </>

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
export default Page;
