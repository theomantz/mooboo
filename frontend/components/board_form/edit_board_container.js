import { connect } from 'react-redux'
import BoardForm from './board_form'
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = ( state, ownProps) => {
  return({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: 'Edit'
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId))
});

export default connect( mapStateToProps, mapDispatchToProps )( BoardForm )