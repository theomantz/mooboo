import React from 'react';
import { pinStyles } from '../config/document_grid'
import DocumentColumn from '../document_cols/document_col'

const actions = [
  "scroll",
  "resize"
]

class DocumentGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null,
      numCols: null
    }

    this.updateContainerDimensions = this.updateContainerDimensions.bind(this)
  }

  componentDidMount() {
    this.props.fetchPins()
    this.updateContainerDimensions();
    actions.forEach( event => 
      window.addEventListener(event, this.updateContainerDimensions)
      )
    // window.addEventListener("resize", this.updateContainerDimensions)
  }

  componentWillUnmount() {
    actions.forEach((event) =>
      window.removeEventListener( event, this.addEventListener)
    );
    
  }

  updateContainerDimensions() {
    this.setState( { 
      width: this.container.offsetWidth, 
      height: this.container.offsetHeight,
      numCols: Math.floor(this.container.offsetWidth / pinStyles.pin_width) })
    this.props.setHeight(this.state.height)
    this.props.setCols(this.state.numCols)
  }

  renderContent() {
    const { width, height, numCols } = this.state
    let divCols = []
    for (let i = 0; i < numCols; i++) {
      divCols.push(<DocumentColumn 
        key={`div-col-${i}`} 
        id={i + 1} 
        height={height}/>);
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