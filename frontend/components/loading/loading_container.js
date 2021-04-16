import { connect } from 'react-redux'
import Loading from './loading'

const mapStateToProps = state => ({
  loading: null || Boolean(state.ui.modal)
})

const mapDispatchToProps = dispatch => ({
  
});

export default connect( mapStateToProps, null )( Loading )