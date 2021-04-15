import Profile from './profile'
import { connect } from 'react-redux' 
import { fetchBoards } from '../../actions/board_actions'
import { fetchUser } from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
  return({
    boards: state.entities.boards,
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
  })
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)