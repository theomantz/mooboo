import { connect } from 'react-redux'
import { fetchPin } from '../../actions/pins_actions'
import CardShow from './card_show'

const mapStateToProps = ( state, ownProps ) => {
  return({
    content: state.entities.pins[ownProps.match.params.id]
  })
};

const mapDispatchToProps = dispatch => ({
  fetchContent: pinId => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)