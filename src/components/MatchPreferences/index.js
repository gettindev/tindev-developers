// == Import : npm
import React from 'react';

// == Import : local
import './matchPreferences.scss';

// Bootstrap Components
import { Button } from 'react-bootstrap';

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
      <div><p>#sideProjects</p></div>
      <div><p>#meetUp</p></div>
    </section>  
    <section id="prefs">  
      <div><p>#job</p></div>
      <div><p>#iHaveAnIdea</p></div>
      <div><p>#whatever</p></div>
    </section> 
    <Button 
        variant="secondary"
        size="lg"  
        className="go" block
        onClick={()=> console.log('prefs changées')}>
        C'est parti !
    </Button>
  </div>
</>
  
);

// == Export
export default MatchPreferences;
