// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local
import './scrollinglist.scss';

// == Import : style

// == Composant
const ScrollingList = ({ users }) => (
  <div className="scrolling-wrapper d-flex flex-nowrap fixed-top">
    {users.map((user) => (
      <Image
        className="user-card"
        src="http://placeimg.com/150/150/people"
        roundedCircle
        key={user.username}
      />
    ))}
  </div>
);


// == Export
export default ScrollingList;
