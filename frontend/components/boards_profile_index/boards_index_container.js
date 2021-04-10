import { connect } from 'react-redux'
import { fetchBoards } from '../../actions/board_actions'
import BoardsIndex from './boards_index'

const mapStateToProps = (state, ownProps) => ({
  boards: Object.values(state.entities.boards),
  userId: ownProps.userId,
  user: state.entities.users[ownProps.userId],
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId))
})

export default connect( mapStateToProps, mapDispatchToProps)(BoardsIndex)