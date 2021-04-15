import BoardForm from './board_form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createBoard } from '../../actions/board_actions'

const mapStateToProps = ( state ) => {
  return({
    board: {
      title: '',
      description: '',
      user_id: state.session.id
    },
    formType: 'Create',
    errors: state.errors.board
  })
};

const mapDispatchToProps = dispatch => {
  return({
    submitBoard: board => dispatch(createBoard(board))
  })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardForm))