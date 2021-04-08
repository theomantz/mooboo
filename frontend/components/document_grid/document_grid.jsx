import React from 'react';

const styles = {
  pin_container: {
    margin: "100px 0 0 0",
    padding: 0,
    width: "96vw",
    display: "grid",
    height: "100%",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  pin_width: 250
};

class DocumentGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.addEventListener)
  }

  updateWindowDimensions() {
    this.setState( { width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return(
      <div style={styles.pin_container}>
      </div>
    )
  }
}

export default DocumentGrid