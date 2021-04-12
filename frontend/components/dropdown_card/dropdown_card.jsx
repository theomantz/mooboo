import React from 'react'

class DropdownCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(item) {
    return e => {
      const { pinId } = this.props;
      return( this.props.addPinToBoard(item.id, pinId))
    }
  }

  render() {
    const { show, data, pinId } = this.props
    if (!show || !data) return null;
    const availableBoards = data.filter( board => {
      return (
        Object.values(board.pins).includes(pinId)
      )
    });
    if( availableBoards.length <= 1 ) {
      return( 
        <li className='all-boards-message'>
          This pin is on all your boards! Wow!
          <span className='all-boards-message-span'>
            Don't worry, we won't judge. We love this one too.
          </span>
        </li>
      )
    }
    const dropdownList = availableBoards.map((item, index) => (
      <li className="dropdown-list-item" key={`board-list-item-${index}`}>
        <span className="dropdown-list-text">{item.title}</span>
        <button
          className="dropdown-list-save-button button-link"
          onClick={this.handleClick(item)}
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