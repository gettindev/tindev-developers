// == Import : npm
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

// imports styles
import { Button } from 'react-bootstrap';
import { Carousel} from 'react-bootstrap';

// == Import : local
import './homePage.scss';

// == Composant
const HomePage = () => (
  <>
    <div id='home'>
      <Carousel>   

        <Carousel.Item>
          <img 
          className="img-fluid"
          src='./src/data/logo.png'
          />
          <img
            className="img-responsive"
            src="./src/data/pictures/homePage-mobile.jpg"
            alt="first slide"
          />            
          <Carousel.Caption>
            <h3>Connectes-toi aux Devs des internets (aussi infini que node-modules)</h3>
            <p>Montes en compétences</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className="img-fluid"
          src='./src/data/logo.png'
          />
          <img
            className="img-responsive"
            src="./src/data/pictures/side-project.jpg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>Parce que la meilleure façon de monter en compétences est de pratiquer une techno sur un projet réel.</h3>
            <p>Staffes un side project</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className="img-fluid"
          src='./src/data/logo.png'
          />
          <img
            className="img-responsive"
            src="./src/data/pictures/bangkok-breakfast.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tu veux rencontrer des Devs qui partagent la même passion, ou tu as une idée de projet en tête?</h3>
            <p>Élargis ton cercle de connaissances</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className="img-fluid"
          src='./src/data/logo.png'
          />
          <img
            className="img-responsive"
            src="./src/data/pictures/pizza.jpg"
            alt="fourth slide"
          />
          <Carousel.Caption>
            <h3>Parce que tu veux manger des pizzas, ou pourquoi pas trouver l'amour?</h3>
            <p>Ou manges des pizzas.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      
      <div className='footerHome'>
        <h2>Peu importe que tu sois Dev, CTO ou CEO, que tu préfères les Ninjas ou les NOObs</h2>
        <p>Trouves ici ton perfect Dev-Match pour staffer tes projets</p>
        {/* <Button href="/matrix" variant="info"> S'identifier via GitHub </Button> */}
         
      </div>
    </div>  
  </>
);

// == Export
export default HomePage;