import React from 'react';

class PinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("mounted")
    this.props.fetchPins()
  };

  pinsItemRender() {
    const { pins } = this.props;
    const PinItems = pins.map( (pin, index) => {
      return(
        <li key={`pin-index-${index}`}>
          <h4>{pin.title}</h4>
          <p>{pin.description}</p>
          <p>{pin.uploader_id}</p>
        </li>
      )
    })
    return PinItems
  }

  render() {
    return(
      <ul>
        {this.pinsItemRender()}
      </ul>
    )
  }
}

export default PinIndex;