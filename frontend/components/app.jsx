import React from 'react'
import { AuthRoute } from '../util/frontend_util'
import { Router, Route } from 'react-router-dom'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <header>
      <NavBannerContainer />
    </header>

    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
  </div>
)

export default App;