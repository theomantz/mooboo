import React from 'react'
import { AuthRoute, ProtectedRoute, AuthRedirect } from '../util/frontend_util'
import { Redirect, Switch, Route } from 'react-router-dom'
import DocumentGridContainer from './document_grid/document_grid_container'
import BoardsIndexContainer from './boards_profile_index/boards_index_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import LandingPageContainer from './landing/landing_page_container';
import PinCardShowContainer from './card_show/pin_card_show_container';
import PinIndexContainer from './pins/pin_index_container'
import ProfileContainer from './profile/profile_container'
import EditUserContainer from './edit_user/edit_user_container'
import AboutPage from './about_page/about'


const App = () => (
  <div style={{height: "100vw"}}>
    <header>
      <NavBannerContainer />
      <Switch>
        <AuthRoute exact path='/' component={LandingPageContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRedirect from='*' />
      </Switch>
    </header>
    <Switch>
      <ProtectedRoute exact path='/pins/:pinId' component={PinCardShowContainer} />
      <Route exact path='/users/:userId/edit' component={EditUserContainer} />
      <Route path='/users/:userId'>
        <div className='profile-page-container'>
          <Route path='/users/:userId' component={ProfileContainer} />
          <Route exact path='/users/:userId/boards' component={BoardsIndexContainer} />
          <Route exact path='/users/:userId/pins' component={PinIndexContainer} />
        </div>
      </Route>
      <ProtectedRoute exact path='/home' component={DocumentGridContainer} />
      <Route exact path='/about' component={AboutPage} />
    </Switch>
      <Redirect exact from='*' to='/home' />
  </div>
)

export default App;