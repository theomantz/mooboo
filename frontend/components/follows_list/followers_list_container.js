import { connect } from 'react-redux'
import FollowersList from './follows_list'
import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions'
import { fetchUser, clearUsers } from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.id,
  user: state.entities.users[parseInt(ownProps.location.pathname.slice(7))],
  listType: "Followers",
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearUsers: () => dispatch(clearUsers()),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( FollowersList ))