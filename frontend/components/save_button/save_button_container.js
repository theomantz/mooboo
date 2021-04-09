import { connect } from 'react-redux'
import SaveButton from './save_button'

const mapStateToProps = state => ({
  boards: null
});

const mapDispatchToProps = dispatch => ({
  savePin: null
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)