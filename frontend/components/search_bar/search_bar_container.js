import SearchBar from './search_bar'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import { closeModal } from '../../actions/modal_actions'


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchBar )