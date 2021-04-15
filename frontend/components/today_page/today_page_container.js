import TodayPage from './today_page'
import { connect } from 'react-redux'
import { fetchAllBoards } from '../../actions/board_actions'

const mapStateToProps = state => ({
  boards: state.entities.boards
})

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchAllBoards())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayPage)