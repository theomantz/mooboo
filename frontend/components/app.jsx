import React from 'react'
import { AuthRoute, ProtectedRoute, AuthRedirectRoute } from '../util/frontend_util'
import { Redirect, Switch } from 'react-router-dom'
import DocumentGridContainer from './document_grid/document_grid_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <header>
      <NavBannerContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/' component={DocumentGridContainer} />
      <Redirect exact from="*" to='/' />
    </Switch>
  </div>
)

export default App;