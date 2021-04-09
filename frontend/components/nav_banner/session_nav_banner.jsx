import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SessionNavBanner extends React.Component {
  render() {

    return (
      <div className="banner flex-nav">
        <div className="links-container left-nav-container">
          <Link to="/home" className="button-link home-button">Home</Link>
          <Link to="/today" className="button-link today-button">Today</Link>
        </div>
        <div className="nav search-bar-container flex-nav">
          <div className="search-bar-icon">
            <FontAwesomeIcon icon={faSearch} /> 
          </div>
          <input type="text" className="search-bar"></input>
        </div>
        <div className="right-nav-container">
          <Link to='/'>
            <button
              onClick={() => this.props.logOut()}
              className="sign-out-button button-link"
            >
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    );
    
  }
}

export default SessionNavBanner