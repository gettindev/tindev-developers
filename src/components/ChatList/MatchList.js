// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

// == Import : local
import './matchlist.scss';

// == Import : style

// == Composant
const MatchList = ({ myMatches }) => {
  console.log('mymatches', myMatches);

  return (
  <div className="scrolling-wrapper d-flex flex-nowrap">
    {mymatches.map((user) => (
      <NavLink key={user.id} to={`/chat/${user.id}`}>
        <Image
          className="user-card"
          src={user.photo}
          roundedCircle
          key={user.id} />
      </NavLink>
    ))}
  </div>
  )};

// == Export
export default MatchList;
