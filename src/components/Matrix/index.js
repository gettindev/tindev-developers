// == Import : npm
import React from 'react';

// imports styles
import { Button } from 'react-bootstrap';

// == Import : local
import './matrix.scss';


// == Composant
const Matrix = ({ prefs }) => (
  
    <div id="matrix">
      <h3>Bienvenue dans la matrice ami Dev !</h3>
      <h4 className="what">Qu'est ce qui t'ammènes?</h4>
      <section id="choice">
        {prefs.map((pref) =>

          <div /*onClick={chosenPref}*/ key={pref.id}>
            <p>{pref.choice}</p>
          </div>

        )}
      </section> 
      <Button id="next" href="/location" variant="Link"> Next </Button>
      <div><img className="logo-matrix" src='./src/data/logo.png'/></div>
      <p>©2019 tous droits réservés</p>
    </div>
  
);

// == Export
export default Matrix;
