// imports npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// imports local
import './nav.scss';
import { MdArrowBack, MdChat } from 'react-icons/md';
import { FiInfo } from "react-icons/fi";
import { Navbar } from 'react-bootstrap';

const NavChat = ({ username }) => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text 
    className="icon" onClick={(e) => {console.log('>>> Back Button', e)}}>
    <NavLink to ="/chat"><MdArrowBack className="icon" /></NavLink></Navbar.Text>
    <Navbar.Text className="td-navbar-username">{username}</Navbar.Text>
    <NavLink to ="/reporting" className="icon" onClick={(e) => {console.log('>>> User Chat', e)}}><FiInfo className='icon' /></NavLink>
  </Navbar>
);

export default NavChat;
