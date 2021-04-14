import { connect } from 'react-redux'
import EditUser from './edit_user'
import { updateUser } from '../../actions/user_actions'

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
  errors: state.errors.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: (formData, user) => dispatch(updateUser(formData, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)