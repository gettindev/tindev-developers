// imports npm
import React from 'react';

// imports local
import './nav.scss';
import { MdArrowBack } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavBackLeft = () => (
  <Navbar className="td-navbar">
    <Navbar.Collapse className="justify-content-start">
      <Navbar.Text className="icon"><MdArrowBack /></Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse>
      <Navbar.Text>Match</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackLeft;
