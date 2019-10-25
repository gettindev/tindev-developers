// imports npm
import React from 'react';
import { NavLink } from'react-router-dom';

// imports local
import './nav.scss';
import { MdArrowBack } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavBackLeft = () => (
  <Navbar className="td-navbar">
    <Navbar.Collapse className="justify-content-start">
      <Navbar.Text onClick={(e) => {console.log('>>> Back Button', e)}}>
      <NavLink to="/matching"><MdArrowBack className="icon" /></NavLink></Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse>
      <Navbar.Text className="padding-left">Match</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackLeft;
