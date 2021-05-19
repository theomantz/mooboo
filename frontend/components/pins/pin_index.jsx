import React from 'react';
import PinCardContainer from '../card/pin_card_container'

class PinIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numCols: null
    }
  }

  componentDidMount() {
    const { fetchPins, match, pins } = this.props
    const { numCols } = this.state
    debugger
    fetchPins(match.params.userId)
    if( !numCols ) {
      this.setNumCols()
    }
  };

  componentDidUpdate(prevProps) {

  }

  setNumCols() {
    const numCols = Math.floor(( window.innerWidth * 0.75 ) / ( 260 + 16 ))
    this.setState({numCols: numCols})
  }

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
    const { pins } = this.props
    const { numCols } = this.state
    if( !pins || !numCols ) return null
    return (
      <div 
        className="main-page-pin-index"
        style={{ 
          columnCount: numCols
          }}>{this.pinsItemRender()}</div>
    );
  }
}

export default PinIndex;