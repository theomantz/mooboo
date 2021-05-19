import { connect } from 'react-redux'
import FollowersList from './follows_list'
import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions'
import { fetchUser, clearUsers, fetchUsers } from '../../actions/user_actions'


const mapStateToProps = ({ session, entities: { users }},{ location: { pathname } }) => {
  return {
    currentUser: users[session.id],
    user: users[parseInt(pathname.slice(7))],
    listType: "Followers",
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: user => dispatch(fetchUsers(user)),
  clearUsers: () => dispatch(clearUsers()),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( FollowersList ))