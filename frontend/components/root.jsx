import App from './app';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

export default ( { store } ) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)