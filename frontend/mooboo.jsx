import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { logIn, logOut, signUp } from './actions/session_actions'

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


  ReactDOM.render(<Root store={store} />, root)
})