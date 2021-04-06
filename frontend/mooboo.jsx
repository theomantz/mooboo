import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { fetchPins } from './actions/pins_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  let store
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore()
  }
  // test section
  window.dispatch = store.dispatch
  window.getState = store.dispatch
  window.fetchPins = fetchPins

  ReactDOM.render(<Root store={store} />, root)
})