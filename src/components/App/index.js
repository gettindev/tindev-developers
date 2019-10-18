// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
// import Nav from 'src/components/Nav';
import Form from 'src/components/ChatRoom/Form';
import Messages from 'src/components/ChatRoom/Messages';

// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    <Messages />
    <Form />

  </div>
);

// == Export
export default App;
