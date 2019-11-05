// == Import : npm
import React from 'react';
import { MdEdit, MdSettings } from 'react-icons/md';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';

// == Import : Firebase
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NavLink, Link } from'react-router-dom';

// import PropTypes from 'prop-types';

// == Import : local
import './user-profil.scss';
import Nav from 'src/components/Nav';

// == Composant
const UserProfil = ({ setLog }) => {
  // use the state instaid //
  const userName = 'myGithubName';
  //
  return (
    <div className="user-profil">
      <Container className="user-profil-info">
        <Row>
          <Col>
            <h2 className="user-profil-info-user-name">{userName}</h2>
            <NavLink to ="/profil/show"><Image className="user-profil-info-avatar" src="http://placeimg.com/100/100/people" roundedCircle /></NavLink>
            <p><MdEdit /><a className="user-profil-info--edit-link" 
            href="#">
            <NavLink to ="/profil/edit">Édites ton profil</NavLink></a></p>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-navigation">
        <Row>
          <Col>
            <Button size="lg" variant="primary" block><MdSettings className="icon" /> Préférences de match</Button>
            <Button as={Link}
            to="/help" size="lg" variant="outline-secondary" block>Aide et assistance</Button>
            <Button as={Link}
            to="/termsOfUse" size="lg" variant="outline-secondary" block>Régles d'utilisation</Button>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-disconnect">
        <Row>
          <Col>
            <Button 
             onClick={() => {
              firebase.auth().signOut().then(function() {
              localStorage.removeItem('logged');
              window.location.replace("/");
            }, function(error) {
              console.error('Sign Out Error', error);
            })}} 
            size="lg" 
            variant="danger" 
            block>Déconnexion</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};  


// == Export
export default UserProfil;
