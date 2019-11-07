// == Import : npm
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

// imports styles
import { Button } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";
import batman from 'src/data/batman.gif';
// == Import : local
import './matchPreferences.scss';


// Bootstrap Components
import { Button, Dropdown } from 'react-bootstrap';
import { FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";


// == Composant
class MatchPreferences extends React.Component {
  
  state = {
    wishesArray: [],
  }

  componentDidUpdate() {
    console.log(this.state.wishesArray)
  }

  // Set the user prefs in the state
  setPref = (value) => {
    const array = this.state.wishesArray;
   
    // Create a bool
    const elemSearching = (element) => {
      // checks whether an element is even
      return element === value;
    };
    

    // If the selected pref is don't find in the array
    if (!array.some(elemSearching)) {
      return (
        this.setState({
        wishesArray: [...this.state.wishesArray,
                  value]
        })
      ) 
    // Then, do the opposite
    } else {
      const  newArray = array.filter(pref => pref !== value);
      return (
        this.setState({
          wishesArray: newArray
        })
      )
    }

  }

  // Get the user prefs
  handlePref = (value, event) => {
    this.setPref(value);
    // Set the background Color
    if (event.target.className === "off") {
      return (
            event.target.className = "on"
      )
    } else {
      return (
            event.target.className = "off"
      )
    }
  }

  handleState = () => {
    const id = localStorage.getItem("id");
    this.props.sendMyWish(this.state.wishesArray, id);
  }
  render() {
  return (
    <>
    <div id="matrix-re">
      <h3 className="h3">Envie de changement ?</h3>
      <Image fluid roundedCircle className="matrix-img" src="src/data/batman.gif" />
      <h4 className="what">On part sur quoi ?</h4>
      <section id="choice-re">
        {this.props.prefs.map((pref) =>
          
          <div className="choice-re-choice"onClick={() => this.handlePref(pref.id, event)} key={pref.id} >
            <p className="off">{pref.choice}</p>
          </div>

        )}
      </section> 
      
      <Button 
      as={Link} 
      to="/profil"
       id="next-re"  
      variant="Link"
      onClick={() => this.handleState()}
      >Sauvegarder <FaArrowAltCircleRight/></Button>
    </div>
    </>
  )}
};


// == Export
export default MatchPreferences;
