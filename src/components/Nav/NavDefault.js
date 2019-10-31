// imports npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// imports local
import './nav.scss';
import svgLogo from 'src/data/logo-tindev-white-background.svg';
import { MdAccountCircle, MdChat } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavDefault = () => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text
      className="icon" onClick={(e) => { console.log('>>> User Button', e) }}>
      <NavLink to="/profil" ><MdAccountCircle /></NavLink></Navbar.Text>
    <Navbar.Text
      className="td-navbar-logo">
      <NavLink to="/matching"><img src={svgLogo} alt="Tindev" height="33" /></NavLink></Navbar.Text>
    <Navbar.Text
      className="icon" onClick={(e) => { console.log('>>> User Chat', e) }}>
      <NavLink to="/chat" ><MdChat /></NavLink></Navbar.Text>
  </Navbar>
);

export default NavDefault;
