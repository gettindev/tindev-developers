// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// imports styles
import { Button } from 'react-bootstrap';

// == Import : local
import './matrix.scss';


// == Composant
const Matrix = ({ prefs }) => {
  
  const handlePref = (event) => {
    let str = event.target;
    console.log(str);
    let value = str.substr(1);
    console.log(value);
    
  };

  return (
    <div id="matrix">
      <h3>Bienvenue dans la matrice ami Dev !</h3>
      <h4 className="what">Qu'est ce qui t'ammènes?</h4>
      <section id="choice">
        {prefs.map((pref) =>

          <div  onClick={handlePref} key={pref.id} value={pref.choice}>
            <p >{pref.choice}</p>
          </div>

        )}
      </section> 
      <Button id="next" href="/location" variant="Link"> Next </Button>
      <div><img className="logo-matrix" src='./src/data/logo.png'/></div>
      <p>©2019 tous droits réservés</p>
    </div>
  
  )};

// == Export
export default Matrix;
