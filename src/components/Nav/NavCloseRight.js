// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// imports local
import './nav.scss';
import { MdClose } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

const NavCloseRight = ({ title }) => (
  <Navbar className="td-navbar">
    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text className="navbar-title padding-right text-truncate">{title}</Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text onClick={(e) => {console.log('>>> Close Button', e)}}><MdClose className="icon" /></Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

NavCloseRight.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavCloseRight;
