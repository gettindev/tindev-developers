// == Import : npm
import React from 'react';

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
      <h4 id="next">Next ></h4>
      <h2 id="logo_matrix">TinDev</h2>
      <p>©2019 tous droits réservés</p>
    </div>
  
);




// == Export
export default Matrix;


// react.development.js:172 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Matrix`. See https://fb.me/react-warning-keys for more information.
//     in div (created by Matrix)
//     in Matrix (created by App)
//     in div (created by App)
//     in App
//     in Provider