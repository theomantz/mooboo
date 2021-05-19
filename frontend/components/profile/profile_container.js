import Profile from './profile'
import { connect } from 'react-redux' 
import { fetchBoards } from '../../actions/board_actions'
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = ({ entities: { users, boards }, session }, { match: { params }}) => {
  return {
    boards: boards,
    user: users[params.userId],
    currentUser: users[session.id],
    userId: params.userId
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: (user) => dispatch(fetchUsers(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))