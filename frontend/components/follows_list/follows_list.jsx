import React from 'react'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import FollowButtonContainer from '../follow_button/follow_button_container'

class FollowersList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    const {
      location,
      fetchUser } = this.props
    const userId = location.pathname.slice(7);
    fetchUser(userId)
  }

  assignRelations() {
    const { user, currentUserId } = this.props
    let users 
    if( this.props.listType === 'Followers') {
      users = user.followers
    } else {
      users = user.followees
    }
    if( !users ) {
      return (
        <li key={uuid()} className="relation-list-item">
          None Yet!
        </li>
      );
    }
    const relationships = Object.values(users).map( user => {
      if( user.id !== currentUserId) {
        return (
          <Link 
            to={`${user.id}`} 
            key={uuid()}
            onClick={() => this.props.closeModal()}>
            <li key={`follow-page-link-${user.id}`}
            className='relation-list-item'>
              <span className='relation-list-link'>
                @{user.username} 
              </span>
                <FollowButtonContainer user={user}/>
            </li>
          </Link>
        );
      }
    })
    return relationships.filter( relation => relation !== undefined )
  }

  renderDropdown() {
    return (
      <div className={`follow-drop-down`}>
        <header className='follow-list-header'>
          <div className='close-button-container'>
            <AiOutlineClose onClick={() => this.props.closeModal()} />
          </div>
          <span className='close-header-text'>{this.props.listType}</span>  
        </header>
        <ul className="relations-list">{this.assignRelations()}</ul>
      </div>
    );
  }

  render() {
    debugger
    if( !this.props.user ) return null
    return(
      <div 
        className='follow-list-container'>
        {this.renderDropdown()}
      </div>
    )
  }
  
  
}

export default FollowersList