import PinForm from './pin_form'
import { connect } from 'react-redux'
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
  errors: state.errors.pins
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: userId => dispatch(fetchBoards(userId)),
})

export default connect( mapStateToProps, mapDispatchToProps )( PinForm )