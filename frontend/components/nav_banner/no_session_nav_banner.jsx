import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/icons/moobooLarge.png";

class NoSessionNavBanner extends React.Component {
  render() {
    return(
        <div className="banner">
          <div className="assets-container left-nav-container">
            <div className="mooboo-icon-container">
              <img src={logo} alt='logo' className="logo"></img>
            </div>
            <h3 className="welcome-title">mooboo</h3> 
          </div>
          <div className="right-nav-container">
            <div className="developer-links-container">
              <div className="about-link-container link-container">
                <span>About</span>
              </div>
              <div className="socials-link-container link-container">
                <span>Socials</span>
              </div>
            </div>
            <nav className="button-container">
              <Link to='/login' className="button-link login-button">Log In</Link>
              <Link to='/signup' className="button-link signup-button">Sign Up</Link>
            </nav>
          </div>
        </div>
      )
  }
}

export default NoSessionNavBanner;