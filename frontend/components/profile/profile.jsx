import React from 'react'

class Profile extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // debugger
    const { userId } = this.props.match.params
    this.props.fetchBoards(userId)
    this.props.fetchUser(userId)
  }

  renderAvatar() {
    
  }

  render() {
    if( !this.props.user ) return null;
    const { user, boards } = this.props
    return(
      <div className="profile-page-container">
        <h1>Profile Component is Working</h1>
      </div>
    )
  }
}

export default Profile