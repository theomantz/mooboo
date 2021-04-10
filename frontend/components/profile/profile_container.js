import Profile from './profile'
import { connect } from 'react-redux' 
import { fetchBoards } from '../../actions/board_actions'
import { fetchUser } from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => ({
  boards: state.entities.boards,
  user: state.entities.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)