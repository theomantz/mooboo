import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { faPen, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddButtonContainer from '../add_button/add_button_container'


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

    const { 
      userId, fetchBoards, 
      fetchUser, fetchUsers 
    } = this.props

    if( userId ) {

      fetchBoards( userId )
      
      fetchUser( userId )
      .then((action) => {

        console.log(action)
        fetchUsers(action.user)
        
      })

    }
    
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
          { user.username ? user.username.slice(0, 2) : 'MB' }
        </div>
      )
    }
  }

  renderUsername() {
    const { user } = this.props
    if( this.props.currentUser.id === this.props.match.params.userId ) {
      return (
        <div className="profile-page-username-container">
          <span className="profile-page-username">
            welcome { user.username ? `@${user.username}` : '@moo' }
          </span>
        </div>
      )
    } else {
      return(
        <div className="profile-page-username-container">
          <span className="profile-page-username">
            {user.username ? `@${user.username}'s` : "@moo's"} Profile
          </span>
        </div>
      )
  }
  }

  renderFollowers() {
    const { followers, followees } = this.props.user
    let numFollowers = followers ? Object.values(followers).length : '0'
    let numFollowees = followees ? Object.values(followees).length : '0'
    return (
      <div className="user-follow-container">
        <span
          className="Following"
          onClick={() => this.props.openModal("Following")}
        >
          {numFollowees} Following
        </span>
        <span
          className="Followers"
          onClick={() => this.props.openModal("Followers")}
        >
          {numFollowers} Followers
        </span>
      </div>
    );
  }

  renderDetails() {
    if( !this.props.user ) return null
    const { user } = this.props
    if( user.location || user.description || user.followers ) {
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

  renderBackArrow() {
    const { history } = this.props
    return(
        <div className="update-user-back-arrow-container">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="update-user-back-arrow"
            onClick={() => history.push('/home')}
          />
      </div>
    )
  }


  renderAdd() {
    const { user, currentUser } = this.props
    if( user.id === currentUser.id ) {
      return (
        <div className={`board-pin-create-container`}>
          <AddButtonContainer location='profile'/>
        </div>
      )
    } else {
      <AddButtonContainer user={user} location='profile-page' />
    }
  }

  render() {
    const { user } = this.props
    if( !user ) return null;
    return (
      <div className="profile-container" key={user}>
          {this.renderBackArrow()}
          {this.renderEdit()}
        <div className="profile-page-avatar-container">
          {this.renderAvatar()}
          {this.renderUsername()}
          {this.renderFollowers()}
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