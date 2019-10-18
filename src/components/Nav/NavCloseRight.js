// imports npm
import React from 'react';

// imports local
import './nav.scss';
import { MdClose } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavCloseRight = () => (
  <Navbar className="td-navbar">
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text onClick={(e) => {console.log('>>> Close Button', e)}}><MdClose className="icon" /></Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavCloseRight;
