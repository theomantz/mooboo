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

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions)
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

  render() {
    return(
      <div style={styles.pin_container}>
      </div>
    );
  }
}

export default DocumentGrid