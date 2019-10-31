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

// ===* Plan d'action *===
// 
// *Je suis un tout nouveau utilisateur
// *J'arrive sur "/" qui me propose l'inscription
// *Je click sur github puis j'arrive sur les préférences
// *(On a récupéré son adresse mail, son id qu'on met dans le state global en attendant la fin de l'inscription)
// *Je choisis mes préférences (celles-ci sont également enregistrées dans le state global)  et je suis dirigé vers la dernière page de l'inscription : la localisation
// *Je choisis local ou worldwide (ces infos sont également enregistrer dans le state global)
// *Au moment ou je clique sur "voir le profil" (Toutes les infos de son inscription sont envoyées en BDD (middleware) et envoyer sur d'autres states pour l'affichage de son profil) (modifié) 
// *Le container du composant - le composant - le middleware - le reducer - le store



// == Composant
class Page extends React.Component {

  // AH OUI, METS DES COMMENTAIRES POUR TE REPERER ! GOOD LUCK ****************

// == initialize State 
  state = { 
    isSignedIn : false,
    pseudo: "",
    photoURL: "",
    email: "",
    idFire: "",
    choosenPref: 0,
  }

// == Firebase authentication
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

// == recovery of user data at registration and injection into the state
  componentDidMount = ()=> {
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
  }

// == recovery of user choices
  //addPref = () => {
  
  //  console.log(choosenPref);
 //}


  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          
          <Matrix prefs={this.props.prefs}/>
          
        ) : (     
            <>
              <HomePage />   
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                className="gitHubButton"
              />
            </>
            ) 
        }
      </div>
    )  
  }
    
};

// == Export
export default Page;
