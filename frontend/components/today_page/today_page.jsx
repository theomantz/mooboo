import React from 'react'
import BoardCard from '../board_card/board_card'

class TodayPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchBoards } = this.props
    fetchBoards()
  }
  
  renderBoards() {
    const { boards } = this.props
    const boardCards = Object.values(boards).map( board => {
      if( board.title !== 'Quick Save' ) {
        return( 
          <BoardCard board={board} key={`board-id-${board.id}`} />
        )
      }
    })
    return boardCards
  }

  render() {
    if( !this.props.boards ) return null
    return (
      <div className='board-index-component today-page'>
        {this.renderBoards()}
      </div>
    )
  }
}

export default TodayPage