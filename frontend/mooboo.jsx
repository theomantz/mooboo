import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import { logIn, logOut, signUp } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')
  const store = configureStore();

  // test section
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.logIn = logIn
  window.logOut = logOut
  window.signUp = signUp

  ReactDOM.render(<Root store={store} />, root)
})