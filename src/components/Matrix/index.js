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
        <div key={pref.id}><p>{pref.choice}</p></div>
      )}
      </section> 
      <Button id="next" href="/location" variant="Link"> Next </Button>
      <h2 id="logo_matrix">TinDev</h2>
      <p>©2019 tous droits réservés</p>
    </div>
  
);


// == Export
export default Matrix;
