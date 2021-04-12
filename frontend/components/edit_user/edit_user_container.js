import { connect } from 'react-redux'
import EditUser from './edit_user'
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)