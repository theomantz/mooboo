import React from 'react'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

class FollowersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
    
    this.handleClick = this.handleClick.bind(this)
    
  }

  componentDidMount() {
    debugger
    const {
      match,
      fetchUser } = this.props
    fetchUser(match.params.userId)
  }

  assignRelations() {
    const { user, currentUserId } = this.props
    let users 
    if( this.props.listType === 'Followers') {
      users = user.followers
    } else {
      users = user.following
    }
    const relationships = Object.values(users).map( user => {
      if( user.id !== currentUserId) {
        return (
          <Link to={`users/${user.id}`} key={uuid()}>
            <li key={`follow-page-link-${user.id}`}>@{user.username}</li>
          </Link>
        );
      }
    })
    return relationships.filter( relation => relation !== undefined )
  }

  handleClick() {
    const active = !this.state.active
    this.setState({ active: active })
  }

  renderDropdown() {
    if( !this.state.active ) {
      return(
        <span className={this.props.relationship}>
          {this.assignRelations().length} {this.props.relationship}
        </span>
      )
    } else {
      return (
        <div className={`follow-drop-down ${this.props.relationship}`}>
          <h1>{this.props.relationship}</h1>
          <ul className="relations-list">{this.assignRelations()}</ul>
        </div>
      );
    }
  }

  render() {
    if( !this.props.users ) return null
    return(
      <div 
        className='follow-list-container'
        onClick={this.handleClick}>
        {this.renderDropdown()}
      </div>
    )
  }
  
  
}

export default FollowersList