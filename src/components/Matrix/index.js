// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// imports styles
import { Button } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";

// == Import : local
import './matrix.scss';


// == Composant
const Matrix = ({ prefs, setPref }) => {
  
  // Get the user prefs
  const handlePref = (value, event) => {
    setPref(value);
    // Set the background Color
    if (event.target.className === "off") {
      return (
            event.target.className = "on"
      )
    } else {
      return (
            event.target.className = "off"
      )
    }
  };

  return (
    <div id="matrix">
      <h3>Bienvenue dans la matrice ami Dev !</h3>
      <h4 className="what">Qu'est ce qui t'ammènes?</h4>
      <section id="choice">
        {prefs.map((pref) =>
          
          <div onClick={() => handlePref(pref.choice, event)} key={pref.id} >
            <p className="off">{pref.choice}</p>
          </div>

        )}
      </section> 
      <Button id="next" href="/location" variant="Link">Next <FaArrowAltCircleRight/></Button>
      <div><img className="logo-matrix" src='./src/data/logo.png'/></div>
      <p>©2019 tous droits réservés</p>
    </div>
  
  )};

// == Export
export default Matrix;
