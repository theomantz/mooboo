import React from 'react';
import uuid from 'react-uuid'
import { docStyles } from '../config/document_grid'

class DocumentCard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return ( 
    <div style={docStyles.docCard} id={uuid()}>
      
    </div> 
    )
  }
}

export default DocumentCard;