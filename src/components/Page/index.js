// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Route, Switch } from 'react-router-dom';

// Import locaux
import HomePage from 'src/components/HomePage'
import Matrix from 'src/components/Matrix'
import Location from 'src/components/Location'
import UserProfil from 'src/components/User/Menu';
import 'src/components/Page/page.scss';
import 'src/components/HomePage/homePage.scss';


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
    photo: "",
    mail: "",
    token: "",
    wishesArray: [],
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
        photo: firebase.auth().currentUser.photoURL,
        mail: firebase.auth().currentUser.email,
        token: firebase.auth().currentUser.uid,
      })
      this.userExist();
    })

  }


  componentDidUpdate = () => {
    //console.log(this.state.token);
    //console.log(firebase.auth().currentUser),
    
    //this.userExist();
  }

  // Check if this user exist
  userExist = () => {
    // Set the matching state loading : true to display the spinner
    this.props.setLoadingTrue();
    // Send a axios request
    const email = this.state.mail;
    // // From app Container
    this.props.getUserFind(email);
  }

  // Set the user prefs in the state
  setPref = (value) => {
    const array = this.state.wishesArray;
    // Create a bool
    const elemSearching = (element) => {
      // checks whether an element is even
      return element === value;
    };
    
    // If the selected pref is don't find in the array
    if (!array.some(elemSearching)) {
      return (
        this.setState({
        wishesArray: [...this.state.wishesArray,
                  value]
        })
      ) 
    // Then, do the opposite
    } else {
      const  newArray = array.filter(pref => pref !== value);
      return (
        this.setState({
          wishesArray: newArray
        })
      )
    }

  }

  // Send all datas on the Global state
  setGlobalState = () => {
      
      const state = this.state;
      console.log(state);
      this.props.getDatas(state);
  }

  render() {
    return (
      <div>
        {/* Loading spinner waiting axios Request */}
        {this.props.loading &&  (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )}

        {/* First Page with Github Auth */}
        {!this.state.isSignedIn && (
          <div id="home-wrapper">
            <HomePage />   
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              className="gitHubButton"
            />
          </div>
        )}
        
        {/*Page with User Prefs*/}
        {this.props.find == false && (
          <Matrix 
            prefs={this.props.prefs} 
            setPref={this.setPref}
            setGlobalState={this.setGlobalState}
            isSignedIn={this.state.isSignedIn}
          />
        )}
      </div>
    )  
  }
    
};

// == Export
export default Page;
