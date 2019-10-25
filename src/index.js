// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import AppContainer from 'src/containers/App/AppContainer';
import store from 'src/store';

// == Import : Semantic Css
import 'bootstrap/dist/css/bootstrap.min.css';

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);

// React render into the DOM
render(rootComponent, document.getElementById('root'));