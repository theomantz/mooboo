import { connect } from 'react-redux'
import BoardForm from './board_form'
import { createBoard } from '../../actions/board_actions'

const mapStateToProps = ( state ) => ({
  board: {
    title: ''
  },
  formType: 'Create',
  errors: Object.values(state.errors.board) || []
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm)