import React from 'react'
import BoardCard from '../board_card/board_card'
import { docStyles } from '../config/document_grid'

class BoardsIndex extends React.Component {

  componentDidMount() {
    const { fetchBoards, user } = this.props
    fetchBoards(user.id)
  }
  render() {
    const { boards, user } = this.props
    if( !boards ) return null
    const filteredBoards = boards.filter(board => board.user_id === user.id )
    const BoardCards = filteredBoards.map( (board, index) => {
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