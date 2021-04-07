import React from 'react';
import { docStyles } from '../config/document_grid'
import DocumentColumnContainer from '../document_col/document_col_container'

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
      numCols: null,
      content: this.props.content,
    }

    this.updateContainerDimensions = this.updateContainerDimensions.bind(this)
  }

  componentDidMount() {
    this.props.fetchPins()
    this.updateContainerDimensions();
    actions.forEach( event => 
      window.addEventListener(event, this.updateContainerDimensions)
      )
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
      numCols: Math.floor(this.container.offsetWidth / docStyles.docColWidth) })
    this.props.setHeight(this.state.height)
    this.props.setCols(this.state.numCols)
    this.assignContent()
  }

  assignContent() {
    debugger
    const { content } = this.state
    if(content){
      for(let i = 0; i < this.state.numCols ; i++) {
        this.props.setContent( { [i]: content.pop() } )
      }
    }
  }

  renderContent() {
    const { height, numCols } = this.state
    let divCols = []
    for (let i = 0; i < numCols; i++) {
      divCols.push(<DocumentColumnContainer 
        key={`div-col-${i}`}
        id={i}
        height={height}/>);
    }
    return(
      <div style={docStyles.docGrid}>
        {divCols}
      </div>
      )
  }

  render() {
    return (
      <div style={docStyles.docContainer} ref={(el) => (this.container = el)}>
        {this.renderContent()}
      </div>
    );
  }
}

export default DocumentGrid