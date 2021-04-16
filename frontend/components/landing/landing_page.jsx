import React from 'react';
import uuid from 'react-uuid';
import LandingCard from './landing_card'


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    
  }

  renderGreeting() {
    return (
      <div className="landing-page-text">
        <h1 className="landing-page-header">welcome to mooboo</h1>
        <span className="landing-page-subtext">find your mood</span>
      </div>
    )
  }

  renderCards() {
    const landingCards = []
    for(let i = 0 ; i < 50 ; i ++ ) {
      landingCards.push(<LandingCard  key={uuid()}/>)
    }
    return landingCards
  }
  

  render() {
    return(
      <div className='outer-landing-container'>
          {this.renderGreeting()}
        <div className='profile-page-pin-index'>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default LandingPage