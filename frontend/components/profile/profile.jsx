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

  render() {
    if( !this.props.user ) return null;
    const { user } = this.props
    return(
      <div className="profile-page-container">

      </div>
    )
  }
}

export default Profile