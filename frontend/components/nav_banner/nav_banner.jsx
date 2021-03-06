import uuid from 'react-uuid'
import React from 'react'
import SessionNavBanner from './session_nav_banner';
import NoSessionNavBanner from './no_session_nav_banner';

export default ({ currentUser, logIn, logOut, signUp, openModal, closeModal }) => {
  if( currentUser ) {
    return (
      <nav className='banner session-banner banner-header'>
        <SessionNavBanner 
          user={currentUser} 
          logOut={logOut}
          closeModal={closeModal}
          openModal={openModal}
          key={currentUser.id}/>
      </nav>
    )
  } else {
    return (
      <nav className='banner no-session-banner banner-header'>
        <NoSessionNavBanner 
          logIn={logIn} 
          signUp={signUp}
          closeModal={closeModal}
          key={uuid()} 
          openModal={openModal}/>
      </nav>
    )
  }
}