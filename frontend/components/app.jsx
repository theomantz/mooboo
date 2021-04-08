import React from 'react'
import { AuthRoute, ProtectedRoute, AuthRedirectRoute } from '../util/frontend_util'
import { Redirect, Switch } from 'react-router-dom'
import DocumentGridContainer from './document_grid/document_grid_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div style={{height: "100vw"}}>
    <header>
      <NavBannerContainer />
      <AuthRoute exact path='/' component={LandingPageContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
    </header>

    {/* <Route exact path='/' component={PinIndexContainer} /> */}
    <Route exact path='/home' component={DocumentGridContainer} />
    <Redirect exact from='*' to='/' />
  </div>
)

export default App;