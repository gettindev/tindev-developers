// imports npm
import React from 'react';

// imports local
import './nav.scss';
import { MdArrowBack, MdChat } from 'react-icons/md';
import { FiInfo } from "react-icons/fi";
import { Navbar } from 'react-bootstrap';

const NavChat = ({ username }) => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> Back Button', e)}}><MdArrowBack className="icon" /></Navbar.Text>
    <Navbar.Text className="td-navbar-username">{username}</Navbar.Text>
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> User Chat', e)}}><FiInfo className='icon' /></Navbar.Text>
  </Navbar>
);

export default NavChat;
