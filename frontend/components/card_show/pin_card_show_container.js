import { connect } from 'react-redux'

const mapStateToProps = ( state, ownProps ) => ({
  content: Object.values(state.entities.pins[ownProps.match.params.id])
});

const mapDispatchToProps = dispatch => ({
  fetchContent: pinId => dispatch(fetchPin(pinId))
})