// == Import : npm
import React from 'react';

// == Import : local
import './user-profil.scss';
import { Navbar } from 'react-bootstrap';

// == Composant
const UserProfil = () => (
  <div className="user-profil">
    <Navbar bg="dark">
      User Profil Page
    </Navbar>
  </div>
);

// == Export
export default UserProfil;
