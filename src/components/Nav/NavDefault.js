// imports npm
import React from 'react';

// imports local
import './nav.scss';
import svgLogo from 'src/data/logo-tindev-white-background.svg';
import { MdAccountCircle, MdChat } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavDefault = () => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> User Button', e)}}><MdAccountCircle /></Navbar.Text>
    <Navbar.Text className="td-navbar-logo"><img src={svgLogo} alt="Tindev" height="33"/></Navbar.Text>
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> User Chat', e)}}><MdChat /></Navbar.Text>
  </Navbar>
);

export default NavDefault;
