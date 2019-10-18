// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
import Matching from 'src/components/Matching';

// == Composant
const App = () => (
  <div className="app">
    <Matching />
  </div>
);

// == Export
export default App;
