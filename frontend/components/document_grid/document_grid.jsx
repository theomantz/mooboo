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
  }

  columnConstructor() {
    const { columns, content } = this.props
    let divCols = []
    let localContent = content
    if(columns && content ) {
      let contentSlice = Math.floor(content.length / columns)
      for(let i = 0; i < columns; i++ ) {
        divCols.push(
          <DocumentColumnContainer
            id={i}
            key={`div-col-${i}`} 
            content={localContent.slice(0, contentSlice)}
            />
        )
        localContent = localContent.slice(contentSlice)
      }
    }
    return divCols;
  }

  renderContent() {
    return(
      <div style={docStyles.docGrid}>
        {this.columnConstructor()}
      </div>
      )
  }

  render() {
    return (
      <div style={docStyles.docContainer} ref={(el) => (this.container = el)}>
        {this.props.content.map(content => <img src={content.photoUrl} alt={content.title}/>)}
        {/* {this.renderContent()} */}
      </div>
    );
  }
}

export default DocumentGrid