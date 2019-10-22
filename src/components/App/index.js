// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import Nav from 'src/components/Nav';
import ChatList from 'src/components/ChatList';


// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    <ChatList />
  </div>
);

// == Export
export default App;