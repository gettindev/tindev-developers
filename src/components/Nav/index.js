// imports npm
import React from 'react';

// imports local
import './nav.scss';

// SUB NAV HEADER BARS
import NavDefault from './NavDefault';
import NavCloseRight from './NavCloseRight';
import NavCloseLeft from './NavCloseLeft';
import NavBackRight from './NavBackRight';
import NavBackLeft from './NavBackLeft';

// Component
const Nav = (props) => {
  const { nav } = props;
  // const { title } = props;
  console.log(nav);
  return (
    <>
      {/* use <Nav /> for Main Nav with user and matchs icons */}
      { !nav && <NavDefault />}
      {/* use <Nav nav="back-left" /> for Nav for the
          my profil / Matchs preferences with back button left */}
      { nav === 'back-left' && <NavBackLeft />}
      {/* use <Nav nav="back-right" /> for  Nav for my profil edition with back button right */}
      { nav === 'back-right' && <NavBackRight />}
      {/* use <Nav nav="close-right" /> for  Nav with close button right */}
      { nav === 'close-right' && <NavCloseRight />}
      {/* use <Nav nav="close-left" /> for  Nav with close button left */}
      { nav === 'close-left' && <NavCloseLeft />}
    </>
  );
};



// export
export default Nav;
