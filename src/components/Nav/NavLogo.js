// imports npm
import React from 'react';

// imports local
import './nav.scss';
import svgLogo from 'src/data/logo-tindev-white-background.svg';
import { Navbar } from 'react-bootstrap';

const NavLogo = () => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text>&nbsp;</Navbar.Text>
    <Navbar.Text className="td-navbar-logo"><img src={svgLogo} alt="Tindev" height="33"/></Navbar.Text>
    <Navbar.Text>&nbsp;</Navbar.Text>
  </Navbar>
);

export default NavLogo;
