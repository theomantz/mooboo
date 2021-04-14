import React from 'react';
import uuid from 'react-uuid';
import { Redirect, Link } from 'react-router-dom'
import PinCardContainer from '../card/pin_card_container'

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)
    const { board } = this.props
    if( this.props.formType === 'Create' ) {
      this.state = {
        title: board.title,
        description: board.description,
        private: board.private || false,
        user_id: board.user_id
      }
    } else {
      this.state = this.props.board
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBoardDelete = this.handleBoardDelete.bind(this);
  }

  componentDidMount(){
    if(this.props.formType === 'Edit') {
      this.props.fetchBoard(this.props.match.params.boardId)
      if( !this.state ) {
        this.setState(this.props.board)
      }
    }
  }

  renderDelete() {
    if( this.props.formType !== 'Edit' ) return null
    return(
      <Link to={`users/${this.props.board.user_id}/boards`}>
        <button 
          className='button-link delete-button edit-form'
          onClick={this.handleBoardDelete}>Delete</button>
      </Link>
    )
  }

  renderPins() {
    const { board } = this.props
    if( !board.pins ) return null
    const pinCards = Object.values(board.pins).map( pin => {
      return(
        <PinCardContainer content={pin} board={board}/>
      )
    })
    return(
      <div className='profile-page-pin-index'>
        {pinCards}
      </div>
    )
  }

  renderErrors() {
    if( !this.props.errors.length ) return null
    const boardErrors = this.props.errors.map( error => {
      return( 
        <li className='board-errors-list-item' key={uuid()}>{error}</li>
      )
    })
    return(
      <div className='board-errors-container'>
        <ul className='board-errors-list'>
          {boardErrors}
        </ul>
      </div>
    )
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? !this.state.private : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleBoardDelete(e) {
    e.preventDefault()
    const { deleteBoard, board } = this.props
    deleteBoard(board.id)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitBoard(this.state)
  }
  
  render() {
    if( !this.props.board || !this.state ) return null
    return(
      <div className={`edit-board-container ${this.props.formType}`}>
        <header className="board-form-header">
          {this.props.formType === 'Create' ? 'Lets get Creative!' : 'Always time for Edits'}
          {this.renderErrors()}
        </header>
        <form onSubmit={this.handleSubmit} className='edit-board-form'>
          <label className='board-form-inputs'>title
            <input
              type='textarea'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Like 'travel' or 'recipes to make'.." 
              className="board-form-input-textarea"
              />
          </label>
          <label className='board-form-inputs'>description
            <input
              type='textarea'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Just a couple words will do" 
              className="board-form-input-textarea"
              />
          </label>
          <label className='private-board-checkbox'>
            <input
              type='checkbox'
              name='private'
              value={this.state.private}
              onChange={this.handleChange}
              className='board-form-private-checkbox' 
              value={this.state.private}
              />
            <div className='board-checkbox-text-container'>
              <p className='board-form-private-bold'>Keep this board private</p>
              <span className='board-form-private-subtext'>Secrets worth keeping</span>
            </div>
          </label>
          <button className='button-link board-form-button'>{this.props.formType}</button>
          {this.renderDelete()}
        </form>
        {this.renderPins()}
      </div>
    )
  }
}

export default CreateBoard