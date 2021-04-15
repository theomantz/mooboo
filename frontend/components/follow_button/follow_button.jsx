import React from 'react'

class FollowButton extends React.Component {
  constructor(props) {
    super(props)

    
  }

  
  
  render() {
    if( !this.props.currentUserId ) return null
    return (
      <button className="button-link follow-button" onClick={this.followUser}>
        Follow
      </button>
    );
  }
}

export default FollowButton