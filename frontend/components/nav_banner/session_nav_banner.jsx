import React from 'react'
import { Link } from 'react-router-dom';

class SessionNavBanner extends React.Component {
  render() {

    return(
      <div className="banner">
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/today'>Today</Link>
        </div>
        <div>
          <span>Search Placeholder</span>
        </div>
        <div className="button-container">
          <Link to='/profile'>Profile Placeholder</Link>
          <button onClick={() => this.props.logOut()}>Sign Out</button>
        </div>
      </div>
    )
    
  }
}

export default SessionNavBanner