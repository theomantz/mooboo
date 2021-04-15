import React, { Component } from 'react'
import PinCardContainer from '../card/pin_card_container'
import { faCamera, faPen, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class BoardShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchBoard, match } = this.props
    fetchBoard(match.params.boardId)
  }

  renderNoPins() {
    <div className='no-pins-card'>
      <div className='content-card'>
        <div className='content-card-image'>
          <FontAwesomeIcon icon={faCamera} size='5x' className='camera-icon' />
        </div>
      </div>
    </div>
  }

  renderPinCards() {
    const { board } = this.props
    if( !board.pins ) {
      return this.renderNoPins()
    }
    const pins = Object.values(board.pins)
    const pinItems = pins.map( (pin, index) =>{
      return(
        <PinCardContainer content={pin} key={`pin-card-index-${index}`} />
      )
    })
    return pinItems
  }

  renderEdit() {
    if( this.props.userId !== this.props.board.user_id ) return null
    return (
      <Link to={`/boards/${board.id}/edit`}>
        <div className="edit-user-button-container">
          <FontAwesomeIcon icon={faPen} className="profile-edit-button" />
        </div>
      </Link>
    );
  }

  handleBack(e) {
    this.props.history.goBack()
  }

  render() {
    if( !this.props.board ) return null
    const { board } = this.props
    return(
      <div className='board-show-page'>
        <FontAwesomeIcon icon={faArrowLeft} onClick={this.handleBack} />
        {this.renderEdit()}
        <header className='board-show-header'>
          { board.title }
        </header>
        <div className='profile-page-pin-index'>
          {this.renderPinCards()}
        </div>
      </div>
    )
  }
}

export default BoardShow