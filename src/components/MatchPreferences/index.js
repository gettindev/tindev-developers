// == Import : npm
import React from 'react';

// == Import : local
import './matchPreferences.scss';

// Bootstrap Components
import { Button, Dropdown } from 'react-bootstrap';
import { FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";

// Component
const MatchPreferences = ({ prefs }) => (
  
  <>
  <div id="matchPreferences">
    <h3>Tu changes tes plans?</h3>
    
    <section id="prefs">
      <div><p>#entraide</p></div>
      <div><p>#discussion</p></div>
      <div><p>#pizzas</p></div>
    </section>
    <section id="prefs">   
      <div><p>#l'amour</p></div>
      <div><p>#sideProject</p></div>
      <div><p>#meetUp</p></div>
    </section>  
    <section id="prefs">  
      <div><p>#job</p></div>
      <div><p>#iHaveAnIdea</p></div>
      <div><p>#whatever</p></div>
    </section> 
    <h3>Choisis ton camp:</h3>
    <Button 
      variant="primary" 
      size="lg" 
      className="prefButton" 
      block>
        <div className="camp_logo"><FaGlobeEurope /></div>
          Wordwide
    </Button>                      
    <Dropdown>
      <Dropdown.Toggle 
      variant="info" 
      size="lg" 
      className="prefButton" 
      block>
        <div className="camp_logo"><FaMapMarkerAlt /></div>
          Local
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Auvergne-Rhône-Alpes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bourgogne-Franche-Comté</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bretagne</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Centre-Val de Loire</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Corse</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Grand Est</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Hauts-de-France</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Île-de-France</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Normandie</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Nouvelle-Aquitaine</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Occitanie</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pays de la Loire</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Provence-Alpes-Côte d'Azur</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Guadeloupe</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Martinique</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Guyane</Dropdown.Item>
        <Dropdown.Item href="#/action-2">La Réunion</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mayotte</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h3 className="camp">Notifications de match:</h3>
    <div className="notifications">
      <input className="conic" type='checkbox'></input>
      <p>Être averti par e-mail.</p>
    </div> 
    <div className="notifications">
      <input className="conic" type='checkbox'></input>
      <p>Être averti par Push notif.</p>
    </div> 
    <Button 
        variant="secondary"
        size="lg"  
        className="go" block
        onClick={()=> console.log('prefs changées')}>
        Sauvegarder
    </Button>
  </div>
  
</>
  
);

// == Export
export default MatchPreferences;
