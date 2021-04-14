import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import BoardsIndexContainer from '../boards_profile_index/boards_index_container'
import AddButtonContainer from './add_button_container'


const colors = [
  '#14613B',
  '#6E9885',
  '#DDE388',
  '#F3BA8D',
  '#F55845',
]

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activePath: 'boards',
      dropDown: false
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.fetchBoards( userId )
    this.props.fetchUser( userId )
  }

  renderAvatar() {
    const { user } = this.props
    const color = colors[Math.floor(Math.random() * colors.length)]
    if( user.photoUrl ) {
      return (
        <img 
          src={user.photoUrl} 
          className='profile-page-avatar'
          />
      )
    } else {
      return (
        <div 
          className='profile-page-avatar'
          style={{backgroundColor: color}}>
          { user.username ? user.username[0] : 'MB' }
        </div>
      )
    }
  }

  renderUsername() {
    const { user } = this.props
    return (
      <div className="profile-page-username-container">
        <span className="profile-page-username">
          welcome { user.username ? `@${user.username}` : '@moo' }
        </span>
        
      </div>
    )
  }

  renderDetails() {
    if( !this.props.user ) return null
    const { user } = this.props
    if( user.location || user.description ) {
      return(
        <div className="user-description-container">
          {user.location ? <span 
            className='user-location-span' >
            {user.location}</span> : null }
          {user.description ? <p 
            className='user-description-p'>
            {user.description}</p> : null }
        </div>
      )
    } else {
      return null
    }
  }

  renderEdit() {
    const { user, currentUser } = this.props
    if( user.id === currentUser.id ) {
      return (
        <Link to={`/users/${user.id}/edit`}>
          <div className="edit-user-button-container">
            <FontAwesomeIcon
              icon={faPen}
              size="lg"
              className="profile-edit-button"
            />
          </div>
        </Link>
      );
    } else {
      return null
    }
  }



  renderAdd() {
    const { user, currentUser } = this.props
    if( user.id === currentUser.id ) {
      return (
        <div className={`board-pin-create-container`}>
          <AddButtonContainer />
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    if( !this.props.user ) return null;
    const { user } = this.props
    return (
      <div className="profile-container" key={this.props.user}>
        {this.renderEdit()}
        <div className="profile-page-avatar-container">
          {this.renderAvatar()}
          {this.renderUsername()}
          {this.renderDetails()}
        </div>
        <div className="profile-page-content-container">
          <div className="profile-page-navlink-container">
            <NavLink
              to={`/users/${user.id}/boards`}
              className="profile-page-link button-link"
              activeClassName="profile-page-active-link"
            >
              Boards
            </NavLink>
            <NavLink
              to={`/users/${user.id}/pins`}
              className="profile-page-link"
              activeClassName="profile-page-active-link"
            >
              Pins
            </NavLink>
          </div>
          {this.renderAdd()}
        </div>
      </div>
    );
  }
}

export default Profile