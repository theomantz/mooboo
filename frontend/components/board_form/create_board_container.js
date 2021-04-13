import { connect } from 'react-redux'
import BoardForm from './board_form'
import { createBoard } from '../../actions/board_actions'

const mapStateToProps = ( state ) => ({
  board: {
    title: '',
    user_id: state.session.id
  },
  formType: 'Create',
});

const mapDispatchToProps = dispatch => ({
  submitBoard: board => dispatch(createBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm)