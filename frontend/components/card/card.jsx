import React from 'react';
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { docStyles } from '../config/document_grid'
import pin_card_container from './pin_card_container';

class DocumentCard extends React.Component {
  constructor(props) {
    super(props)

  }

  renderDelete() {
    if( !this.delete || !this.props.userId ) return null
    return(
      <button
        className='button-link delete-button'
        onClick={this.handleRemoveFromBoard()}>Remove</button>
    )
  }

  render() {
    const { content } = this.props
    return (
      <Link to={`/pins/${content.id}`}>
        <div key={uuid()}>
          <div className="content-card">
            <div className="content-card-image">
              <img
              src={content.photoUrl}
                alt={content.title}
                style={docStyles.docCard}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default DocumentCard;