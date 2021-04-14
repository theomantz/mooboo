import { connect } from 'react-redux'
import BoardForm from './board_form'
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';

const mapStateToProps = ( state, ownProps) => {
  return({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: 'Edit',
    errors: state.errors.board
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  submitBoard: boardId => dispatch(updateBoard(boardId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default connect( mapStateToProps, mapDispatchToProps )( BoardForm )