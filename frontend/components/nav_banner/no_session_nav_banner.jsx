import React from "react";
import { Link, NavLink } from 'react-router-dom';

class NoSessionNavBanner extends React.Component {
  
  render() {
    return (
      <div className="banner">
        <div className="assets-container left-nav-container">
          <Link 
            to='/'>
            <div className="mooboo-icon-container">
              <img src={window.moobooLarge} alt="logo" className="logo"></img>
            </div>
          </Link>
            <h3 className="welcome-title">mooboo</h3>
        </div>
        <div className="right-nav-container">
          <div className="developer-links-container">
            <div className="about-link-container link-container">
            <NavLink 
              to='/about'
              className='button-link about-link'
              activeClassName='active-link'
              >
              About
            </NavLink>
            </div>
            <div className="socials-link-container link-container">
              <span>Socials</span>
            </div>
          </div>
          <nav className="button-container">
            <button 
              onClick={() => this.props.openModal('login')}
              className='login-button button-link'>
              Log In
            </button>
            <button 
              onClick={() => this.props.openModal('signup')}
              className='signup-button button-link'>
              Sign Up
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default NoSessionNavBanner;