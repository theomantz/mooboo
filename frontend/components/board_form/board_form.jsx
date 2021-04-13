import React from 'react';
import PinCardContainer from '../card/pin_card_container'

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.board

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(type) {
    return(e =>
        this.setState({ [type]: e.currentTarget.value })
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.CreateBoard(this.state)
  }
  
  render() {
    if( !this.props.board ) return null
    return(
      <div className="edit-board-container">
        <form onSubmit={this.handleSubmit} className='edit-board-form'>
          <label>title
            <input
              type='text'
              value={this.state.title}
              onChange={this.handleChange('title')}
              placeholder="Like 'travel' or 'recipes to make'.." />
          </label>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default CreateBoard