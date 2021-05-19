import React from 'react'



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
    const { user, currentUser } = this.props
    const { followees } = currentUser

    if( followees ) {
      const followed = Boolean(followees[user.id])
      if( followed ) {
        this.setState( { followedStatus: true } )
      }
    } 
  }


  followUser() {
    const { user, currentUser, followUser } = this.props
    followUser( currentUser.id, user.id )
      .then( () => this.setState({
        followedStatus: true
      }))
  }

  unfollowUser() {
    const { user, currentUser, unfollowUser } = this.props
    unfollowUser( currentUser.id , user.id )
      .then( () => this.setState({
        followedStatus: false
      }))
  }
  

  renderButton() {
    const { user, currentUser } = this.props
    const { followedStatus } = this.state
    if( user.id === currentUser.id ) return null
    if( followedStatus ) {
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
    const { currentUser } = this.props
    if( !currentUser ) return null
    return (
    <div className='follow-unfollow-button-container'>
      {this.renderButton()}
    </div>
    )
  }
}

export default FollowButton