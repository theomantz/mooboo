import React from "react";
import { Link } from 'react-router-dom';

class NoSessionNavBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="assets-container left-nav-container">
          <Link to='/'>
            <div className="mooboo-icon-container">
              <img src={window.moobooLarge} alt="logo" className="logo"></img>
            </div>
          </Link>
            <h3 className="welcome-title">mooboo</h3>
        </div>
        <div className="right-nav-container">
          <div className="developer-links-container">
            <div className="about-link-container link-container">
            <Link to='/about'>
              <span className='about-page-link'>About</span>
            </Link>
            </div>
            <div className="socials-link-container link-container">
              <span>Socials</span>
            </div>
          </div>
          <nav className="button-container">
            <Link to="/login" className="button-link login-button">
              Log In
            </Link>
            <Link to="/signup" className="button-link signup-button">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default NoSessionNavBanner;