// == Import : npm
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 03d727847e286409c96b4171054f0c1e0b836ee3
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
const UserProfil = ({ user, setLog, getMyInfos }) => {
  // use the state instaid //
  const userName = `${user.firstName} ${user.lastName}`;
  const githubAvatar = user.avatar;
  useEffect(() => {
    getMyInfos();
  }, []);
  //
  return (
    <div className="user-profil">
      <Container className="user-profil-info">
        <Row>
          <Col>
            <h2 className="user-profil-info-user-name">{userName}</h2>
            <NavLink to="/profil/show"><Image width="150" className="user-profil-info-avatar" src={githubAvatar} roundedCircle /></NavLink>
            <p><MdEdit /><NavLink to="/profil/edit" className="user-profil-info--edit-link">Édites ton profil</NavLink></p>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-navigation">
        <Row>
          <Col>
            <Button as={Link} to="/preferences" size="lg" variant="primary" block><MdSettings className="icon" /> Préférences de match</Button>
            <Button as={Link} to="/help" size="lg" variant="outline-secondary" block>Aide et assistance</Button>
            <Button as={Link} to="/termsOfUse" size="lg" variant="outline-secondary" block>Régles d'utilisation</Button>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-disconnect">
        <Row>
          <Col>
            <Button 
             onClick={() => {
              firebase.auth().signOut().then(function() {
              localStorage.clear();
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
