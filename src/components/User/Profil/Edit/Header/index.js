import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import PropTypes from 'prop-types';

// import './header.scss';

const Header = ({ userName, avatar }) => (
  <Row>
    <Col className="text-center mt-4 mb-4">
      <h4 id="emoji"> Hello {userName}
        <span className="animated bounceIn infinite delay-1s d-block emoji" role="image" aria-label="Hi!"></span>
      </h4>
      <p className="subtitle">Bienvenue sur l'édition de ton profil.</p>
      <Image src={avatar} alt={`Avatar du profil de ${userName}`} width="80" height="80" roundedCircle className="avatar" />
    </Col>
  </Row>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Header;
