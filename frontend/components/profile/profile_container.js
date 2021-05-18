import Profile from './profile'
import { connect } from 'react-redux' 
import { fetchBoards } from '../../actions/board_actions'
import { fetchUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'


const mapStateToProps = ({ entities: { users, boards }, session }, { match: { params }}) => {
  return {
    boards: boards,
    user: users[params.userId],
    currentUser: users[session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))