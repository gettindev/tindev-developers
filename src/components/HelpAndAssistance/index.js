// imports npm
import React from 'react';

// imports local
import './helpAndAssistance.scss';

// Bootstrap Components
import { Button } from 'react-bootstrap';

// Component
const HelpAndAssistance = () => {
  return (
    <div className='helpAndAssistance'>
      <h1>Aide et assistance</h1>
        <p className="terms">
          1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet praesentium qui quo ea non recusandae repellat nemo! Suscipit neque ipsam iure numquam rem nobis odio eaque ducimus voluptates explicabo facilis pariatur.
        </p>
        <p className="terms">
          2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet praesentium qui quo ea non recusandae repellat nemo.
        </p>
        <p className="terms">
          3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet praesentium necessitatibus!
        </p>
        <Button 
        variant="outline-light"
        size="lg"  
        className="contact" block
        onClick={()=> console.log('contact demandé')}>
        Contact
      </Button>
    </div>
  )
}

// export
export default HelpAndAssistance;