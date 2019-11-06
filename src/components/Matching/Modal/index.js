// == Import : npm
import React from 'react';
import { Modal, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaExternalLinkAlt, FaTags, FaLaptopCode, FaEnvelopeOpenText, FaUserNinja, FaHotjar, FaGlobeEurope } from "react-icons/fa";
import PropTypes from 'prop-types';

// == Import : local
import './modal.scss';


// == Composant
const Mod = (props) => {
    
    // Destructuration
    const { onHide, currentuser} = props;

    return (
      <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
      className="mod"
    >
      <Modal.Header closeButton className="mod-header">
          <Modal.Title id="contained-modal-title-vcenter">
              Son profil détaillé
          </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mod-body" >
            <>
              <Card.Img className="mod-body-img" variant="top" src={currentuser.photo}/>
              <Card.Body>
                <Card.Title className="mod-body-name"><FaUserNinja className="mod-body-tag"/>{currentuser.firstName}</Card.Title>
                {/* <Card.Title className="mod-body-exp"><FaHotjar className="mod-body-tag"/>{currentuser.exp}</Card.Title> */}
                <Card.Title className="mod-body-loc"><FaGlobeEurope className="mod-body-tag"/>{currentuser.location}</Card.Title>
                <ListGroupItem  className="mod-body-bio">
                  <FaEnvelopeOpenText /> Bio : {currentuser.bio}
                </ListGroupItem>
              </Card.Body>
              <ListGroup className="mod-body-bio">
                {/* <ListGroupItem className="mod-body-tag" ><FaLaptopCode className="mod-body-tag"/>{currentuser.tech}</ListGroupItem> */}
                {/* <ListGroupItem className="mod-body-tag" ><FaTags className="mod-body-tag"/>{currentuser.tag}</ListGroupItem> */}
              </ListGroup>
              <Card.Body>
                {currentuser.url !== null && (
                    currentuser.url.map((link) =>
                    <Card.Link 
                    key={link.name} 
                    href={link.href}
                    target="blank"
                    className="mod-body-link"
                    ><FaExternalLinkAlt />{link.name}</Card.Link>
                  ))}
              </Card.Body>
            </>
      </Modal.Body>
      <Modal.Footer className="mod-footer">
            <Button onClick={onHide} className="mod-footer-btn">Close</Button>
      </Modal.Footer>
      </Modal>
    )
}

// Export
export default Mod;