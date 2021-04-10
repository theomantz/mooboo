import Profile from './profile'
import { connect } from 'react-redux' 
import { fetchBoards } from '../../actions/board_actions'
import { fetchUser } from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => ({
  boards: state.entities.boards,
  userId: ownProps.match.params.userId,
});

const mapDispatchToProps = dispatch => ({
  boards: userId => dispatch(fetchBoards(userId)),
  user: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)