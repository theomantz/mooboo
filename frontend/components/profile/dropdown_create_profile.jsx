import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if ( !this.props.active ) return null
    const userId = this.props.match.params.userId
    return (
      <div className="dropdown-list-container">
        <ul className="dropdown-list">
          <Link to={`/users/${userId}/pins/new`}>
            <li onClick={this.handleClick}>
              Create Pin
            </li>
          </Link>
          <Link to={`/users/${userId}/boards/new`}>
            <li onClick={this.handleClick}>
              Create Board</li>
          </Link>
        </ul>
      </div>
    );
  }

}

export default withRouter(DropDownProfile)