import { connect } from 'react-redux'
import FollowersList from './follows_list'
import { withRouter } from 'react-router-dom'
import { fetchUser, clearUsers } from '../../actions/user_actions'


const mapStateToProps = ( state, ownProps ) => ({
  currentUserId: state.session.id,
  user: state.entities.users[ownProps.match.params.userId],
  listType: 'Followers'
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearUsers: () => dispatch(clearUsers())
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( FollowersList ))