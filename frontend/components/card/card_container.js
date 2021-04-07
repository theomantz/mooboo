import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pins_actions';
import DocumentCard from './card'

const mapStateToProps = ( state, ownProps ) => ({
  pin: state.entities.pins[ownProps.pinId]
});

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentCard)