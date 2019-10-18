// imports npm
import React from 'react';

// imports local
import './nav.scss';
import logoTindev from 'src/data/logo.png';
import { MdAccountCircle, MdChat, MdArrowBack, MdArrowForward, MdClose } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

// Component
const Nav = () => (
  <>
    {/* Main Nav with user and matchs icons */}
    <Navbar expand={false} className="tindev">
      <Navbar.Text className="icon"><MdAccountCircle /></Navbar.Text>
      <Navbar.Text className="tindev-logo">Tindev</Navbar.Text>
      <Navbar.Text className="icon"><MdChat /></Navbar.Text>
    </Navbar>
    {/* Nav for the my profil / Matchs preferences with back button left */}
    <Navbar className="tindev">
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text className="icon"><MdArrowBack /></Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Navbar.Text>Match</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    {/* Nav for my profil edition with back button right */}
    <Navbar className="tindev">
      <Navbar.Collapse className="justify-content-right">
        <Navbar.Text className="navbar-title">Mon profil</Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="icon"><MdArrowForward /></Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    {/* Nav with close button right */}
    <Navbar className="tindev">
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="icon"><MdClose /></Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    {/* Nav with close button left */}
    <Navbar className="tindev">
      <Navbar.Text className="icon"><MdClose /></Navbar.Text>
    </Navbar>
  </>
);

// export
export default Nav;
