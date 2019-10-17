// imports npm
import React from 'react';

// imports styles
import { FaUserAlt, FaRegCommentDots } from "react-icons/fa";

// imports local
import './nav.scss';

// Component
const Nav = () => {

  return (
        <div className="navbar">
            <div className="navbar-item"><FaUserAlt /></div>
            <img src='src/data/logo.png'/>
            <div className="navbar-item"><FaRegCommentDots /></div>
        </div>
    )
};


// export
export default Nav;