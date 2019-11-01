// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

// Import locaux
import HomePage from 'src/components/HomePage'
import Matrix from 'src/components/Matrix'
import Location from 'src/components/Location'
import UserProfil from 'src/components/User/Menu';

// == initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDcu5HQXGajTZwTV3oGNbb2mwpQU-cSbSA",
  authDomain: "tindev-a9966.firebaseapp.com"
})

// == Composant
class Page extends React.Component {

  

// == initialize State 
  state = { 
    isSignedIn : false,
    pseudo: "",
    photoURL: "",
    email: "",
    idFire: "",
    userPref: [],
  }

//== Firebase authentication
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn:!!user,
        pseudo: firebase.auth().currentUser.displayName,
        photoURL: firebase.auth().currentUser.photoURL,
        email: firebase.auth().currentUser.email,
        idFire: firebase.auth().currentUser.uid,
      })
    })
  }


  componentDidUpdate = () => {
    console.log(this.state.isSignedIn);
    console.log(this.state.pseudo);
    console.log(this.state.photoURL);
    console.log(this.state.email);
    console.log(this.state.idFire);
    console.log(this.state.userPref);
  }


  // Set the user prefs in the state
  setPref = (value) => {

    const array = this.state.userPref;

    // Create a bool
    const elemSearching = (element) => {
      // checks whether an element is even
      return element === value;
    };
    
    // If the selected pref is don't find in the array
    if (!array.some(elemSearching)) {
      return (
        this.setState({
        userPref: [...this.state.userPref,
                  value]
        })
      ) 
    // Then, do the opposite
    } else {
      const  newArray = array.filter(pref => pref !== value);
      return (
        this.setState({
          userPref: newArray
        })
      )
    }

  }


  render() {

   

    return (
      <div>
        {/*this.state.isSignedIn ? (*/}
          
          <Matrix 
          prefs={this.props.prefs} 
          classBox={this.state.classBox}
          setPref={this.setPref}/>
          
         {/* ) : (     
             <>
              <HomePage />   
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                className="gitHubButton"
              />
            </> 
            ) 
        }  */}
      </div>
    )  
  }
    
};

// == Export
export default Page;
