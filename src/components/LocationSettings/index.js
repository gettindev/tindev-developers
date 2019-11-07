// imports npm
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

// imports styles
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaGlobeEurope, FaArrowAltCircleRight } from "react-icons/fa";

// imports local
import './locationSettings.scss';

// Component
const LocationSettings = ({ locs, location, setUserLoc, sendMyLoc}) => {

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

    //Send datas to the middleware
    const currentId = localStorage.getItem("id");
    sendMyLoc(location, currentId);
    
  }

  return (
      <>
      <div className="location_new"> 
        <div className="loc">
          <Image fluid roundedCircle className="img-earth" src="src/data/earth.gif" />
          <p>Localisation des matchs</p>
          <h3>Choisis ton camp : <div className="choix">{location}</div></h3>  
          <Button 
          variant="primary" 
          size="lg" 
          className="buttonChoix" 
          block
          onClick={() => handleLoc("Worlwide")}>
            <div className="camp"><FaGlobeEurope /></div>
            Wordwide
          </Button>                      
          <Dropdown>
            <Dropdown.Toggle variant="info" size="lg" className="buttonChoix" block>
              <div className="camp"><FaMapMarkerAlt /></div>
              Local
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {locs.map((loc)=>
                <Dropdown.Item onClick={() => handleLoc(loc)} key={loc}>{loc}</Dropdown.Item>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Button 
          variant="Link" 
          id="see-loc" 
          onClick={()=> handleSend()}
          as={Link}
          to="/profil"
          >
            Sauvegarder <FaArrowAltCircleRight/>
          </Button>
        </div>
      </div>   
      </> 
    )
};


// export
export default LocationSettings;
