import React from 'react'
import { Link } from 'react-router-dom'

class FollowersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      followers: null,
      following: null
    }
  }

  componentDidMount() {
    const { clearUsers, 
      followRelations,
      fetchUser } = this.props
    Object.values(followRelations).forEach( id => fetchUser(id) )
  }

  assignRelations() {
    const { users, currentUserId } = this.props
    const relationships = Object.values(users).map( user => {
      if( user.id !== currentUserId) {
        return (
          <Link to={`users/${user.id}`}>
            <li key={`follow-page-link-${user.id}`}>{user.username}</li>
          </Link>
        );
      }
    })
    return relationships
  }

  render() {
    if( this.state.active || !this.props.users ) {
      
    }
  }
  
  
}

export default FollowersList