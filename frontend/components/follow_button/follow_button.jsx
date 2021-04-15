import React from 'react'
import { 
  followUser,
  unfollowUser
 } from '../../util/user_api_util'


class FollowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followedStatus: null
    }
    
    this.followUser = this.followUser.bind(this)
    this.unfollowUser = this.unfollowUser.bind(this)
    
  }

  componentDidMount() {
    this.determineStatus()
  }

  determineStatus() {
    const { user, currentUserId } = this.props
    if( user.followers ) {
      const followed = Object.values(user.followers).some( follower => {
        return follower.id === currentUserId
      })
      if( followed ) {
        this.setState( { followedStatus: true } )
      }
    } 
  }


  followUser() {
    const { user, currentUserId } = this.props
    followUser( user.id, currentUserId )
      .then( () => this.setState({
        followedStatus: true
      }))
  }

  unfollowUser() {
    const { user, currentUserId } = this.props
    unfollowUser( user.id, currentUserId )
      .then( () => this.setState({
        followedStatus: false
      }))
  }
  

  renderButton() {
    const { user, currentUserId } = this.props
    if( user.id === currentUserId ) return null
    if( this.state.followedStatus ) {
      return (
        <button className="button-link follow-button" onClick={this.unfollowUser}>
          Unfollow
        </button>
      );
    } else {
      return (
        <button
          className="button-link follow-button"
          onClick={this.followUser}
        >
          Follow
        </button>
      );
    }
  }
  
  render() {
    if( !this.props.currentUserId ) return null
    return (
    <div className='follow-unfollow-button-container'>
      {this.renderButton()}
    </div>
    )
  }
}

export default FollowButton