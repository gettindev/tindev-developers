// imports npm
import React from 'react';
import { NavLink } from'react-router-dom';

// imports local
import './nav.scss';
import { MdArrowForward } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavBackRight = () => (
  <Navbar className="td-navbar">
    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text className="navbar-title padding-right">Mon Profil</Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text 
      onClick={(e) => {console.log('>>> Back Button', e)}}>
      <NavLink to ="/matching"><MdArrowForward className="icon" /></NavLink></Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackRight;
