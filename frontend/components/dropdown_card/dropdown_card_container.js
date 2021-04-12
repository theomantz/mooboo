import { connect } from 'react-redux'
import DropdownCard from './dropdown_card'
import { fetchBoard, addPinToBoard } from '../../actions/board_actions'

const mapStateToProps = ( state, ownProps ) => ({
  // pin: state.entities.pins[ownProps.match.params.pinId]
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  addPinToBoard: (boardId, pinId) => dispatch(addPinToBoard(boardId, pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCard)