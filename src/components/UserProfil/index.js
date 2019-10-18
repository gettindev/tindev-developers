// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './user-profil.scss';
import Nav from 'src/components/Nav';
import { MdEdit, MdSettings } from 'react-icons/md';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// == Composant
const UserProfil = () => {
  const userName = 'myGithubName';
  return (
    <div className="user-profil">
      <Nav nav="back-right" />
      <Container className="user-profil-info">
        <Row>
          <Col>
            <h2 className="user-profil-info-user-name">{userName}</h2>
            <Image className="user-profil-info-avatar" src="http://placeimg.com/100/100/people" roundedCircle />
            <p><MdEdit /> <a className="user-profil-info--edit-link" href="#">Édites ton profil</a></p>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-navigation">
        <Row>
          <Col>
            <Button size="lg" variant="primary" block><MdSettings className="icon" /> Préférences de match</Button>
            <Button size="lg" variant="outline-secondary" block>Aide et assistance</Button>
            <Button size="lg" variant="outline-secondary" block>Régles d'utilisation</Button>
          </Col>
        </Row>
      </Container>
      <Container className="user-profil-disconnect">
        <Row>
          <Col>
            <Button size="lg" variant="danger" block>Déconnexion</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

/*

UserProfil.propTypes = {
  userName: PropTypes.string.isRequired,
};

*/

// == Export
export default UserProfil;
