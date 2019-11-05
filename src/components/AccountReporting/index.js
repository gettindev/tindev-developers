// imports npm
import React from 'react';

// imports local
import './accountReporting.scss';

// Bootstrap Components
import { Form, Button } from 'react-bootstrap';

// Component
const AccountReporting = () => {
  return (
    <div className='accountReporting'>
      <h1>Signaler ce compte?</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum consequuntur tempore dolorum sapiente, laudantium sed, quos accusantium voluptatum deleniti aliquid assumenda ullam?
      </p>
      <Form>
        <Form.Group controlId="reasonsForReporting">
          <Form.Label>Lorem ipsum dolorum :</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Button 
        variant="secondary" 
        size="lg"  
        className="confirmReport" block
        onClick={()=> console.log('utilisateur signalé')}>
        Confirmer?
      </Button>
    </div>
  )
}

// export
export default AccountReporting;