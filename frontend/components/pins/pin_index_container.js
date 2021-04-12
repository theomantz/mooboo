import PinIndex from './pin_index';
import { connect } from 'react-redux';
import { fetchPinByUser } from '../../actions/pins_actions'

const mapStateToProps = ({ entities }) => {
  return {
    pins: Object.values(entities.pins)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPins: (userId) => dispatch(fetchPinByUser(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)