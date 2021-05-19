import React from 'react';
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import { docStyles } from '../config/document_grid'


class DocumentCard extends React.Component {
  constructor(props) {
    super(props)

    this.handleRemoveFromBoard = this.handleRemoveFromBoard.bind(this)
  }

  handleRemoveFromBoard() {
    const { board, content } = this.props
    this.props.removePin(board.id, content.id)
  }

  renderDelete() {
    if( !this.props.board || !this.props.userId ) return null
    return(
      <Link to={`/boards/${this.props.board.id}/edit`}>
        <button
          className='button-link delete-button remove-from-board-button'
          onClick={this.handleRemoveFromBoard}>Remove</button>
      </Link>
    )
  }

  render() {
    const { content } = this.props
    return (
      <Link to={`/pins/${content.user_id}/${content.id}`}>
        <div key={uuid()}>
          <div className="content-card">
            <div className="content-card-image">
              <img
              src={content.photoUrl}
                alt={content.title}
                style={{...docStyles.docCard, width: '260px'}}
              />
              {this.renderDelete()}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default DocumentCard;