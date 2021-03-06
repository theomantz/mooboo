import React from 'react'
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/frontend_util'
import { Redirect, Switch, Route } from 'react-router-dom'
import DocumentGridContainer from './document_grid/document_grid_container'
import BoardsIndexContainer from './boards_profile_index/boards_index_container'
import CreateBoardContainer from './board_form/create_board_container'
import EditBoardContainer from './board_form/edit_board_container'
import NavBannerContainer from './nav_banner/nav_banner_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import LandingPageContainer from './landing/landing_page_container';
import PinCardShowContainer from './card_show/pin_card_show_container';
import CreatePinFormContainer from './pins_form/create_pin_form_container'
import BoardShowContainer from './board_show/board_show_container'
import PinIndexContainer from './pins/pin_index_container'
import ProfileContainer from './profile/profile_container'
import EditUserContainer from './edit_user/edit_user_container'
import AboutPage from './about_page/about'
import TodayPageContainer from './today_page/today_page_container'


const App = () => (
  <div className='inner-root'>
    <Modal />
    <header>
      <NavBannerContainer />
      <Route exact path='/pins/new' component={CreatePinFormContainer} />
      <Route exact path='/boards/new' component={CreateBoardContainer} />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={LandingPageContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/about' component={AboutPage} />
      <AuthRoute exact path='*' component={LandingPageContainer}/>
    </Switch>
    <Switch>
      <Route exact path='/pins/:userId/:pinId' component={PinCardShowContainer} />
      <Route exact path='/boards/:boardId' component={BoardShowContainer} />
      <Route exact path='/boards/:boardId/edit' component={EditBoardContainer} />
      <Route exact path='/users/:userId/edit' component={EditUserContainer} />
      <Route path='/users/:userId'>
        <div className='profile-page-container'>
          <Route path='/users/:userId' component={ProfileContainer} />
          <Route exact path='/users/:userId/boards' component={BoardsIndexContainer} />
          <Route exact path='/users/:userId/pins' component={PinIndexContainer} />
          <Route exact path='/users/:userId/boards/new' component={CreateBoardContainer} />
        </div>
      </Route>
      <ProtectedRoute exact path='/home' component={DocumentGridContainer} />
      <ProtectedRoute exact path='/today' component={TodayPageContainer} />
    </Switch>
      {/* <Redirect exact from='*' to='/home' /> */}
  </div>
)

export default App;