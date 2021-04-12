import React from 'react'
import { docStyles } from '../config/document_grid'

class BoardCard extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const { board } = this.props
    const pins = Object.values(board.pins)
    if( pins.length < 3 ) {
      const pin = pins[0]
      return (
        <div className="board-card-container">
          <div className="board-image-container">
            <div className='board-single-image'>
              <img
                src={pin.photoUrl}
                alt="board-single-image"
                className="board-only-image"
              />
            </div>
          </div>
          <div className="board-card-text-container">
            <span className="board-title">{board.title}</span>
            <span className="pin-count">
              {pins.length} {pins.length > 1 ? "Pins" : "Pin"}
            </span>
          </div>
        </div>
      );
    }
    return (
      <div className="board-card-container">
        <div className='board-image-container'>
          <div className='board-main-image'>
            <img 
            src={pins[0].photoUrl} 
            alt="board-tile-image" 
            className='board-title-image'/>
          </div>
          <div className='board-second-images'>
            <div className='board-second-image-top-container'>
              <img
                src={pins[1].photoUrl}
                alt='board-second-image-top'
                className="board-second-image-top board-second-image" />
            </div>
            <div className='board-second-image-bottom-container'>
              <img
                src={pins[2].photoUrl}
                alt='board-second-image-bottom'
                className="board-second-image-bottom board-second-image" />
            </div>
          </div>
        </div>
        <div className="board-card-text-container">
          <span className='board-title'>
            {board.title}
          </span>
          <span className='pin-count'>
            {pins.length} { pins.length > 1 ? 'Pins' : 'Pin' } 
          </span>
        </div>
      </div>
    );
  }
}

export default BoardCard