import { connect } from 'react-redux'
import DropdownCard from './dropdown_card'
import { fetchBoard, addPinToBoard, fetchBoards } from '../../actions/board_actions'

const mapStateToProps = ({ entities: { users }, session }, { boards, show, pinId }) => ({
  user: users[session.id],
  boards: boards,
  show: show,
  pinId: pinId
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  addPinToBoard: (boardId, pinId) => dispatch(addPinToBoard(boardId, pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCard)