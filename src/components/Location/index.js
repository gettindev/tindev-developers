// imports npm
import React from 'react';

// imports styles
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";

// imports local
import './location.scss';

// Component
const Location = () => {

  return (
      <>
      <div className="location_newUser"> 
        <div id="header_location"><img src='src/data/logo.png'/></div>
        <div className="location">
          <h2>Hello githubUserName</h2> 
          <p>Préférences de localisation des matchs</p>
          <h3>Choisis ton camp :</h3>  
          <Button variant="primary" size="lg" className="buttonChoice" block>
            <div className="camp_logo"><FaGlobeEurope /></div>
            Wordwide
          </Button>                      
          <Dropdown>
            <Dropdown.Toggle variant="info" size="lg" className="buttonChoice" block>
              <div className="camp_logo"><FaMapMarkerAlt /></div>
              Local
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Auvergne-Rhône-Alpes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bourgogne-Franche-Comté</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bretagne</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Centre-Val de Loire</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Corse</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Grand Est</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Hauts-de-France</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Île-de-France</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Normandie</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Nouvelle-Aquitaine</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Occitanie</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Pays de la Loire</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Provence-Alpes-Côte d'Azur</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Guadeloupe</Dropdown.Item>
              <Dropdown.Item href="#/action-15">Martinique</Dropdown.Item>
              <Dropdown.Item href="#/action-16">Guyane</Dropdown.Item>
              <Dropdown.Item href="#/action-17">La Réunion</Dropdown.Item>
              <Dropdown.Item href="#/action-18">Mayotte</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="secondary" size="lg" href="/matching" id="see" block>
            Voir les profils
          </Button>
        </div>
      </div>   
      </> 
    )
};


// export
export default Location;
