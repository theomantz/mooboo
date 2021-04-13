import { connect } from 'react-redux'
import BoardForm from './board_form'
import { fetchBoard } from '../../util/board_api_util';

const mapStateToProps = ( state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId]
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId))
});

export default connect( mapStateToProps, mapDispatchToProps )( BoardForm )