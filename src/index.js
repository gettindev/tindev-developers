// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import App from 'src/components/App';
import store from 'src/store';

// == Import : Semantic Css
import 'bootstrap/dist/css/bootstrap.min.css';

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// React render into the DOM
render(rootComponent, document.getElementById('root'));