import { connect } from 'react-redux';
import { fetchPin, deletePin } from '../../actions/pins_actions';
import { removePin } from '../../actions/board_actions'
import DocumentCard from './card'

const mapStateToProps = ( state, ownProps ) => ({
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  savePin: pinId => dispatch(savePin(pinId)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  removePin: (boardId, pinId) => dispatch(removePin(boardId, pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentCard)