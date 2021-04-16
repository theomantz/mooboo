import React from 'react';
import uuid from 'react-uuid'
import Flip from 'react-reveal/Flip'

const colors = ["#14613B", "#6E9885", "#DDE388", "#F3BA8D", "#F55845"];
const heights = ["150px", "175px", "200px", "300px", "325px", "350px"];

class LandingCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  componentDidMount() {
    this.setState({ active: !this.state.active })
    setTimeout(() => this.setState({ active: !this.state.active }), 2500)
  }


  render() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const height = heights[Math.floor(Math.random() * heights.length)];
    return (
      <div>
        <Flip left opposite when={this.state.active}>
          <div key={uuid()}>
            <div className="content-card">
              <div 
                className="content-card-image-landing"
                style={{backgroundColor: color, height: height}}
              >
              </div>
            </div>
          </div>
        </Flip>
      </div>
    );
  }
}

export default LandingCard;