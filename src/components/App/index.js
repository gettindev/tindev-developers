// == Import : npm
import React from 'react';
import Nav from 'react-bootstrap/Nav';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import ChatList from 'src/components/ChatList';
import MessagesList from 'src/components/ChatList/MessagesList';


// == Composant
const App = () => (
  <div className="app">
    <Nav className="bg-dark d-flex justify-content-between" defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">ICON</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">TINDEV</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">ICON</Nav.Link>
      </Nav.Item>
    </Nav>
    <ChatList />
    <MessagesList />
  </div>
);

// == Export
export default App;
