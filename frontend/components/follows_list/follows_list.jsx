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
      user,
      fetchUser,
      fetchUsers,
      listType
    } = this.props
    
    fetchUser(user.id)

    fetchUsers({
      user: user, relation: listType
    })
    
  }

  assignRelations() {
    debugger
    const { user, currentUser } = this.props
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
    debugger
    const relationships = Object.values(users).map( u => {
      debugger
      if( u.id !== currentUser.id) {
        return (
          <Link 
            to={`${u.id}`} 
            key={uuid()}
            onClick={() => this.props.closeModal()}>
            <li key={`follow-page-link-${u.id}`}
            className='relation-list-item'>
              <span className='relation-list-link'>
                @{u.username} 
              </span>
                <FollowButtonContainer user={u}/>
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