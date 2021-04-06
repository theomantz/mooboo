import React from 'react'

class DemoUser extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(e) {
    // debugger
    e.preventDefault()
    this.props.logIn(this.props.demoUser)
  }



  render() {
    return( <button
              onClick={this.handleClick}
              className="demo-user-button button">
              Try it Out
            </button>)
  }
}

export default DemoUser