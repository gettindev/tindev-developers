// imports npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// imports local
import './nav.scss';
import svgLogo from 'src/data/logo-tindev-white-background.svg';
import { Navbar } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';

const NavCloseRightLogo = () => (
  <Navbar className="td-navbar">

    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text className="navbar-title padding-right"></Navbar.Text>
      <Navbar.Text
      className="td-navbar-logo">
      <NavLink to="/matching"><img src={svgLogo} alt="Tindev" height="33" /></NavLink></Navbar.Text>
    </Navbar.Collapse>

    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text 
      onClick={(e) => {console.log('>>> Close Button', e)}}>
      <NavLink to ="/profil"><MdClose className="icon" /></NavLink></Navbar.Text>
    </Navbar.Collapse>

  </Navbar>
);

export default NavCloseRightLogo;
