import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props)

  }

  handleClick(type) {
    this.props.openModal(type)
  }


  render() {
    if ( !this.props.active ) return null
    const userId = this.props.match.params.userId
    return (
      <div className="dropdown-list-container">
        <ul className="dropdown-list">
            <li onClick={() => this.handleClick('pin')}>
              Create Pin
            </li>
            <li onClick={() => this.handleClick('board')}>
              Create Board
            </li>
        </ul>
      </div>
    );
  }

}

export default withRouter(DropDownProfile)