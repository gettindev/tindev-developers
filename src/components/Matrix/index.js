// == Import : npm
import React from 'react';

// == Import : local
import './matrix.scss';


// == Composant
const Matrix = () => (
  <>
    <div id="matrix">
      <h3>Bienvenue dans la matrice ami Dev !</h3>
      <h4 className="what">Qu'est ce qui t'ammènes?</h4>
      <section id="choice">
        <div><p>#entraide</p></div>
        <div><p>#discussion</p></div>
        <div><p>#pizzas</p></div>
      </section>
      <section id="choice">   
        <div><p>#l'amour</p></div>
        <div><p>#stafferUnProjet</p></div>
        <div><p>#meetUp</p></div>
      </section>  
      <section id="choice">  
        <div><p>#job</p></div>
        <div><p>#iHaveAnIdea</p></div>
        <div><p>#whatever</p></div>
      </section> 
      <h4 id="next">Next ></h4>
      <h2 id="logo">TinDev</h2>
      <p>©2019 tous droits réservés</p>
    </div>
  </>
);




// == Export
export default Matrix;