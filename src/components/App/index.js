// == Import : npm
import React from 'react';

// == Import : local
import Form from 'src/components/ChatRoom/Form';
import Messages from 'src/components/ChatRoom/Messages';

// == Import : style
import './app.scss';

// Import locaux
import messages from 'src/data/messages'; // data
// import Nav from 'src/components/Nav';

// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    <Messages messages={messages} />
    <Form />

  </div>
);

// == Export
export default App;
