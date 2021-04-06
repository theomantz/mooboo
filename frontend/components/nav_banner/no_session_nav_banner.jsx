import React from "react";
import { Link } from 'react-router-dom';

class NoSessionNavBanner extends React.Component {
  render() {
    return(
        <div className="banner">
          <div className="assets-container">
            <h3>Assets Section</h3> 
          </div>
          <div className="right-nav-container">
            <div>About/Socials/Link</div>
            <nav className="button-container">
              <Link to='/signup' className="button-link button">Sign Up</Link>
              <Link to='/login' className="button-link button">Log In</Link>
            </nav>
          </div>
        </div>
      )
  }
}

export default NoSessionNavBanner;