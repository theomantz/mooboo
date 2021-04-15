import BoardShow from './board_show'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBoard } from '../../actions/board_actions'



const mapStateToProps = ( state, ownProps ) => {
  return({
    board: state.entities.boards[ownProps.match.params.boardId],
    userId: state.session.id
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId))
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( BoardShow ))