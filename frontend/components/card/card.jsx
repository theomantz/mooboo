import React from 'react';
import uuid from 'react-uuid'
import { docStyles } from '../config/document_grid'

class DocumentCard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { content } = this.props
    return ( 
    <div style={docStyles.docCard} id={uuid()}>
      <div className='content-card'>
        {content.title}
        {content.description}
      </div>
    </div> 
    )
  }
}

export default DocumentCard;