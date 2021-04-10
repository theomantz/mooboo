import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import BoardsIndexContainer from '../boards_profile_index/boards_index_container'
import BoardNavButtonContainer from '../nav_button/board_nav_button_container'

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
      activePath: 'boards'
    }
  }

  componentDidMount() {
    const { userId } = this.props.match.params
    this.props.fetchBoards(userId)
    this.props.fetchUser(userId)
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
          welcome { user.username ? user.username : 'moo' }
        </span>
      </div>
    )
  }

  render() {
    if( !this.props.user ) return null;
    const { user } = this.props
    const { activePath } = this.state
    return(
      <div className="profile-page-container">
        <div className="profile-page-avatar-container">
          {this.renderAvatar()}
          {this.renderUsername()}
        </div>
        <div className='profile-page-content-container'>
          <div className="profile-page-navlink-container">
              <BoardNavButtonContainer activePath={ activePath } />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile