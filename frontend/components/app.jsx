import React from 'react'
import { AuthRoute } from '../util/frontend_util'
import { Router, Route, Redirect } from 'react-router-dom'
import PinIndexContainer from './pins/pin_index_container';
import LandingPageContainer from './landing/landing_page_container';
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