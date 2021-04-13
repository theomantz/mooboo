import BoardShow from './board_show'
import { connect } from 'react-redux'
import { fetchBoard } from '../../actions/board_actions'



const mapStateToProps = ( state, ownProps ) => {
  return({
    board: state.entities.boards[ownProps.match.params.boardId]
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId))
});

export default connect( mapStateToProps, mapDispatchToProps )( BoardShow )