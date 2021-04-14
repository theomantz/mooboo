import PinForm from './pin_form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBoards } from '../../actions/board_actions'

const mapStateToProps = state => ({
  pin: {
    title: '',
    description: '',
    photoFile: null,
    photoPreview: null
  },
  boards: state.entities.boards,
  userId: state.session.id,
  errors: state.errors.pins,
  formType: 'Create'
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
  createPin: (formData, pin) => dispatch(createPin(formdata, pin))
})

export default withRouter(
  connect( 
    mapStateToProps, 
    mapDispatchToProps 
  )( PinForm )
);