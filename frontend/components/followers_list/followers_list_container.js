import { connect } from 'react-redux'
import FollowersList from './followers_list'
import { fetchUser, clearUsers } from '../../actions/user_actions'


const mapStateToProps = ({ session, entities }) => ({
  currentUserId: session.id,
  users: entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearUsers: () => dispatch(clearUsers())
});

export default connect( mapStateToProps, mapDispatchToProps )( FollowersList )