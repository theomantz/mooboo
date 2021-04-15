import { connect } from 'react-redux'
import AddButton from './add_button';
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal())
})

export default connect( null, mapDispatchToProps )( AddButton )