// imports npm
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// imports styles
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";

// imports local
import './location.scss';

// == Import : Firebase
import firebase from "firebase"
import { isBoolean } from 'util';

// Component
const Location = ({ locs, location, setUserLoc, datas, sendDatas, setLog }) => {

  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Set the user loc choice to state
  const handleLoc = (loc) => {
      setUserLoc(loc);
  }

  // Finish the auth and send datas to BDD
  const handleSend = () => {
    
    // Default userLoc
    if (location.length < 4 ) {
      setUserLoc("Wordwide");
    }

    const allDatas = {firstName, lastName, ...datas , location};
    const signBool = datas.isSignedIn;
    const wishes = datas.wishesArray;
    //Send sign in bool to app reducer
    // setLog(signBool);
    // localStorage.setItem('logged', true);
    // //Send datas to the middleware
    // sendDatas(allDatas, wishes);
  }

  return (
      <>
      <div className="location_newUser"> 
        <div id="header_location"><img src='src/data/logo.png'/></div>
        <div className="location">
          <h2>Hello Dev</h2> 
          <input value={firstName} onChange={() => setFirstName(event.target.value)} className="input" placeholder="Ton prénom" required/>
          <input value={lastName} onChange={() => setLastName(event.target.value)} className="input" placeholder="Ton nom" required/>
          <p>Préférences de localisation des matchs</p>
          <h3>Choisis ton camp : <div className="choice">{location}</div></h3>  
          <Button 
          variant="primary" 
          size="lg" 
          className="buttonChoice" 
          block
          onClick={() => handleLoc("Worlwide")}>
            <div className="camp_logo"><FaGlobeEurope /></div>
            Wordwide
          </Button>                      
          <Dropdown>
            <Dropdown.Toggle variant="info" size="lg" className="buttonChoice" block>
              <div className="camp_logo"><FaMapMarkerAlt /></div>
              Local
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {locs.map((loc)=>
                <Dropdown.Item onClick={() => handleLoc(loc)} key={loc}>{loc}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Button 
          variant="secondary" 
          size="lg"  
          id="see" block
          onClick={()=> handleSend()}
          // as={Link}
          // to="/matching"
          >
            Voir les profils
          </Button>
        </div>
      </div>   
      </> 
    )
};


// export
export default Location;
