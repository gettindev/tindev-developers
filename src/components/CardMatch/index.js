// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';

// == Import : local


// == Import : style
import './card.scss';

// Import locaux


// == Composant
const CardMatch = () => {
 
  return  (
        <>
          <div className="name">Jean-Claude</div>
          <Image roundedCircle 
          className="img-responsive" 
          alt="Photo by bruce mars from Pexels" 
          src="src/data/girl.jpg"/>
          <div className="exp">Ninja</div>
          <div className="content">
              <div className="bio">Bio: qdjnsqjdhdqdjsqhdlsqdqhdldhhdldqhfqlfhqslfhqlfhqslfhqlfqslfqhfqlfhqslfhqslfqhfqflhqfqsfqqFFSQfFFsqffqsfqsFSQfqffqfqfsqfFQFqsfqFQFqfqfFQFFFfFQFqsFFSQSfqfSQFqfqFQFQfqfFFF
              </div>
              <button className="btn">Voir le profil complet</button>
              <div className="tech">JS REACT REDUX</div>
          </div>
          <div className="tag">#amour #entraide</div>
        </>
           );
}

// == Export
export default CardMatch;