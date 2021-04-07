import { connect } from 'react-redux';
import { fetchPin } from '../../util/pins_api_util';
import DocumentColumn from './document_col'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  setHeight: height => dispatch(setHeight(height)),
  fetchPin: pinId => dispatch(fetchPin(pinId))
});

export default connect(null, mapDispatchToProps)(DocumentColumn)