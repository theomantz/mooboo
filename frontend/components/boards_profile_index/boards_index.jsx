import React from 'react'
import BoardCard from '../board_card/board_card'
import { docStyles } from '../config/document_grid'

class BoardsIndex extends React.Component {

  componentDidMount() {
    const { fetchBoards, match } = this.props
    fetchBoards(match.params.userId)
  }
  render() {
    const { boards } = this.props
    if( !boards ) return null
    const BoardCards = boards.map( (board, index) => {
      return(<BoardCard board={board} key={`board-id-${board.id}-index-${index}`}/>)
    })
    return(
      <div className="board-index-component">
        {BoardCards}
      </div>
    )
  }
}

export default BoardsIndex