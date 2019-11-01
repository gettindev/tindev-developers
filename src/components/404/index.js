// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
import { NavLink } from'react-router-dom';

// Import local
import kid from 'src/data/kid.gif';
import 'src/components/404/404.scss';
const Notfound = ({ logged }) => {

  return (
    <>
      <h1 className="notfound-title">La page demandée n'existe pas (même dans node_modules)</h1>
      <Image roundedCircle className="notfound-img" src={kid} />
      <NavLink className="notfound-link" to ={logged ? "/matching" : "/"}>Go Home</NavLink>
    </>
  )
}

export default Notfound;