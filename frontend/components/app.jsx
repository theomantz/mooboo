import React from 'react'
import { Router, Route } from 'react-router-dom'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1 className="mooboo-app canary">App is Working</h1>
      <NavBannerContainer />
    </header>

    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
)

export default App;