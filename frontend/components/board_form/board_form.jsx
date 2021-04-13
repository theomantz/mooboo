import React from 'react';
import PinCardContainer from '../card/pin_card_container'

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)
    const { board } = this.props
    this.state = {
      title: board.title,
      description: board.description,
      private: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    if(this.props.formType === 'Edit') {
      this.props.fetchBoard(this.props.match.params.boardId)
      if( !this.state ) {
        this.setState(this.props.board)
      }
    }
  }

  renderPins() {
    const { board } = this.props
    if( !board.pins ) return null
    const pinCards = Object.values(board.pins).map( pin => {
      return(
        <PinCardContainer />
      )
    })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? !this.state.private : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitBoard(this.state)
  }
  
  render() {
    if( !this.props.board ) return null
    return(
      <div className="edit-board-container">
        <header className="board-form-header">
          {this.props.formType === 'Create' ? 'Lets get Creative!' : 'Always time for Edits'}
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
        </form>
      </div>
    )
  }
}

export default CreateBoard