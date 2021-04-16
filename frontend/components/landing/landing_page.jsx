import React from 'react';


const colors = ["#14613B", "#6E9885", "#DDE388", "#F3BA8D", "#F55845"];


class LandingPage extends React.Component {
  constructor() {
    super(props)
  }

  render() {
    return(
      <div className="landing-page-text">
        <h1 className="landing-page-header">welcome to mooboo</h1>
        <span className="landing-page-subtext">find your mood</span>
      </div>
    )
  }
}

export default LandingPage