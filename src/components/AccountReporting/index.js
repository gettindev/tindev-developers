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
        Veuillez nous indiquer les raisons de votre signalement.
      </p>
      <p>
        Vous pouvez signaler le profil après nous avoir indiqué un problème.
      </p>
      <Form>
        <Form.Group controlId="reasonsForReporting">
          <Form.Label>ex: Contenu indésirable, propos inapropiés, etc...</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Button 
        variant="outline-secondary" 
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