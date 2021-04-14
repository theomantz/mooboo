import { connect } from 'react-redux'
import { fetchPin, deletePin } from '../../actions/pins_actions'
import CardShow from './card_show'

const mapStateToProps = ( state, ownProps ) => {
  return({
    content: state.entities.pins[ownProps.match.params.pinId],
    userId: state.session.id
  })
};

const mapDispatchToProps = dispatch => ({
  fetchContent: pinId => dispatch(fetchPin(pinId)),
  deletePin: pinId => dispatch(deletePin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)