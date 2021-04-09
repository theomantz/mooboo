import React from 'react'
import { AuthRoute, ProtectedRoute, AuthRedirect } from '../util/frontend_util'
import { Redirect, Switch, Route } from 'react-router-dom'
import DocumentGridContainer from './document_grid/document_grid_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import LandingPageContainer from './landing/landing_page_container';
import PinCardShowContainer from './card_show/pin_card_show_container';

const App = () => (
  <div style={{height: "100vw"}}>
    <header>
      <NavBannerContainer />
      <AuthRoute exact path='/' component={LandingPageContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
    </header>
    <Switch>
      <ProtectedRoute exact path='/pins/:pinId' component={PinCardShowContainer} />
      <ProtectedRoute exact path='/home' component={DocumentGridContainer} />
    </Switch>
      <Redirect exact from='*' to='/' />
  </div>
)

export default App;