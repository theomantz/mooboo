import React from 'react'
import uuid from 'react-uuid'
import { withRouter, Redirect } from 'react-router-dom';

class DemoUser extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logIn(this.props.demoUser)
    return <Redirect to='/home'/>
  }

  render() {
    return( <button
              onClick={this.handleClick}
              className="demo-user-button button session-form-button"
              key={uuid()}>
              Try it Out
            </button>)
  }
}

export default withRouter(DemoUser)