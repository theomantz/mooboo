import React from 'react'

class DropdownCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addedBoards: [],
      open: this.props.show
    }
    this.handleClick = this.handleClick.bind(this)
    this.filterBoards = this.filterBoards.bind(this)
  }

  handleClick(item) {
    return e => {
      
      const { addedBoards } = this.state
      const { pinId, addPinToBoard } = this.props;

      addPinToBoard(item.id, pinId)
        .then(() => {
          const addedBoards = addedBoards.push(item.id)
          this.setState({ addedBoards: addedBoards })
        })
    }
  }

  filterBoards() {

    const { boards } = this.props
    const { addedBoards } = this.state
    
    const { pinId } = this.props
    if( !boards.length  ) return null
    const availableBoards = []

    boards.forEach( board => {
      if( !board.pins ) { 
        if( board.title !== 'Quick Save') {
          return availableBoards.push(board)
        }
      } else {
        let test = Object.values(board.pins).every( pin => pin.id !== parseInt(pinId) )
        if( test && board.title !== 'Quick Save') {
            return availableBoards.push(board)
        }
      }
    })
    return availableBoards
  }

  render() {

    const { show, boards } = this.props
    if( !boards.length ) return null
    let availableBoards = this.filterBoards()

    if ( !show || !availableBoards ) return null;

    if( availableBoards.length < 1 ) {
      return( 
        <li className='all-boards-message'>
          This pin is on all your boards! Wow!
          <span className='all-boards-message-span'>
            Don't worry, we won't judge. We love this one too.
          </span>
        </li>
      )
    }
    const dropdownList = availableBoards.map((board, index) => (
      <li className="dropdown-list-item" key={`board-list-item-${index}`}>
        <span className="dropdown-list-text">{board.title}</span>
        <button
          className="dropdown-list-save-button button-link"
          onClick={this.handleClick(board)}
        >
          Save
        </button>
      </li>
    ));
    return (
      <div className="drop-down-list-container">
        <ul className="board-list">{dropdownList}</ul>
      </div>
    );
  }
}

export default DropdownCard;