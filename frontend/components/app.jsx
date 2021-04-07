import React from 'react'
import { AuthRoute } from '../util/frontend_util'
import { Router, Route } from 'react-router-dom'
import PinIndexContainer from './pins/pin_index_container';
import DocumentGridContainer from './document_grid/document_grid_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div style={{height: "100vw"}}>
    <header>
      <NavBannerContainer />
    </header>

    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    {/* <Route exact path='/' component={PinIndexContainer} /> */}
    <Route exact path='/' component={DocumentGridContainer} />
  </div>
)

export default App;