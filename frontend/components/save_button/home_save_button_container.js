import { connect } from 'react-redux'
import SaveButton from './save_button'
import { withRouter } from 'react-router-dom'
import { fetchBoards, addPinToBoard } from '../../actions/board_actions'

const mapStateToProps = ({ entities, session }) => ({
  boards: Object.values(entities.boards),
  userId: session.id
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  addPinToBoard: (boardId, pinId) => dispatch(addPinToBoard(boardId, pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)