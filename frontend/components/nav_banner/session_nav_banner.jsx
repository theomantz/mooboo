import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class SessionNavBanner extends React.Component {
  render() {
    const { user, logOut } = this.props
    return (
      <div className="banner flex-nav">
        <div className="links-container left-nav-container">
          <NavLink to="/home" 
            className="button-link home-button"
            activeClassName="active-link"
            >
            Home
          </NavLink>
          <NavLink 
            to="/today" 
            className="button-link today-button"
            activeClassName='active-link'
            >
            Today
          </NavLink>
        </div>
        <div className="nav search-bar-container flex-nav">
          <div className="search-bar-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" className="search-bar"></input>
        </div>
        <div className="right-nav-container">
        <NavLink 
          to={`/users/${user.id}`} 
          className="profile-link-button"
          activeClassName='active-link'
          >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              onClick={() => logOut()}
              className="sign-out-button button-link"
              style={{ textDecoration: "none" }}
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