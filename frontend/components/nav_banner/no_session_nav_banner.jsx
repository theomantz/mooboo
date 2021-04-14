import React from "react";
import { Link, NavLink } from 'react-router-dom';

class NoSessionNavBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="assets-container left-nav-container">
          <NavLink 
            to='/'
            activeClassName='active-link active-link-logo'>
            <div className="mooboo-icon-container">
              <img src={window.moobooLarge} alt="logo" className="logo"></img>
            </div>
          </NavLink>
            <h3 className="welcome-title">mooboo</h3>
        </div>
        <div className="right-nav-container">
          <div className="developer-links-container">
            <div className="about-link-container link-container">
            <NavLink 
              to='/about'
              activeClassName='active-link'
              >
              <span className='about-page-link'>About</span>
            </NavLink>
            </div>
            <div className="socials-link-container link-container">
              <span>Socials</span>
            </div>
          </div>
          <nav className="button-container">
            <NavLink 
              to="/login" 
              className="button-link login-button"
              activeClassName='active-link'
              >
              Log In
            </NavLink>
            <NavLink 
              to="/signup" 
              className="button-link signup-button"
              activeClassName='active-link'>
              Sign Up
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default NoSessionNavBanner;