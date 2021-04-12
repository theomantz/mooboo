import React from 'react';
import PinCardContainer from '../card/pin_card_container'

class PinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPins(this.props.match.params.userId)
  };

  pinsItemRender() {
    const { pins } = this.props;
    const PinItems = pins.map( (pin, index) => {
      return(
        <PinCardContainer content={pin} key={`profile-page-pin-card-${index}`} />
      )
    })
    return PinItems
  }

  render() {
    if( !this.props.pins ) return null
    return(
      <div className="profile-page-pin-index">
        {this.pinsItemRender()}
      </div>
    )
  }
}

export default PinIndex;