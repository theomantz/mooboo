import React from 'react';
import { pinStyles } from '../config/document_grid'

class DocumentGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null
    }

    this.updateContainerDimsiones = this.updateContainerDimsiones.bind(this)
  }

  componentDidMount() {
    this.updateContainerDimsiones();
    window.addEventListener("resize", this.updateContainerDimsiones)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.addEventListener)
  }

  updateContainerDimsiones() {
    this.setState( { width: this.container.offsetWidth, height: this.container.offsetHeight })
  }


  calculateCols() {
    const { width } = this.state;
    const numCols = Math.floor( width / pinStyles.pin_width )
    let divCols = []
    for(let i = 0 ; i < numCols ; i++ ){
      divCols.push(<div key={`div-col-${i}`} id={i+1} ></div>)
    }
    return divCols
  }

  renderContent() {
    const { height, width } = this.state;
    const numCols = Math.floor(width / pinStyles.pin_width);
    let divCols = [];
    for (let i = 0; i < numCols; i++) {
      divCols.push(<div key={`div-col-${i}`} id={i + 1}></div>);
    }
    return(
      <div style={pinStyles.pin_grid}>
        {divCols}
      </div>
      ) 
      
  }

  render() {
    return (
      <div style={pinStyles.pin_container} ref={(el) => (this.container = el)}>
        {this.renderContent()}
      </div>
    );
  }
}

export default DocumentGrid