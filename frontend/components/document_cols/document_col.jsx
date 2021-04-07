import React from 'react'
import { pinStyles } from '../config/document_grid'

const actions = [
  "scroll"
]


class DocumentColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: null,
    }
  }

  componentDidMount() {
    actions.forEach( event => this.updateContainerDimensions )
  }

  updateContainerDimensions() {
    this.setState( {
      height: this.container.offsetHeight
    });
    
  }

  render() {
    const { id } = this.props
    return( <div style={pinStyles.pin_column} id={id}></div> )
  }

}

export default DocumentColumn