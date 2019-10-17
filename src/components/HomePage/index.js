// == Import : npm
import React from 'react';

// imports styles
import { Button } from 'react-bootstrap';

// == Import : local
import './homePage.scss';
// import { Navbar } from 'react-bootstrap';

// == Composant
const HomePage = () => (
  <>
  <div id="home">
      <div className='mainHome'>
        <h1>Tindev</h1>
        <h2>Connectes-toi aux Devs des internets</h2> 
        <h3>(aussi infini que node-modules)</h3>
        <p>Montes en compétences</p>
      </div>
      <div className='footerHome'>
        <h2>Peu importe que tu sois Dev, CTO ou CEO, que tu préfères les Ninjas ou les NOObs</h2>
        <p>Trouves ici ton perfect Dev-Match pour staffer tes projets</p>
        <Button variant="dark"> S'identifier via GitHub </Button>
      </div>
    </div>
  </>
);

// == Export
export default HomePage;