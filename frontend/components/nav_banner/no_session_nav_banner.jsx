import React from "react";
import { Link } from 'react-router-dom';

class NoSessionNavBanner extends React.Component {
  render() {
    return(
        <div className="banner">
          <div className="assets-container">
            <h3>Assets Section</h3> 
          </div>
          <div className="button-container">
            <div>About/Socials/Link</div>
            <nav>
              <Link to='/signup' >Sign Up</Link>
              <Link to='/login' >Log In</Link>
            </nav>
          </div>
        </div>
      )
  }
}

export default NoSessionNavBanner;