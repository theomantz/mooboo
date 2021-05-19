import { connect } from 'react-redux'
import { fetchBoards } from '../../actions/board_actions'
import BoardsIndex from './boards_index'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({entities: { boards, users }}, { match: { params }}) => ({
  boards: Object.values(boards),
  user: users[params.userId],
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId))
})

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(BoardsIndex))