import PinForm from "./pin_form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPin } from "../../actions/pins_actions";
import { fetchBoards } from "../../actions/board_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.id],
  boards: state.entities.boards,
  userId: state.session.id,
  errors: state.errors.pins,
  formType: "Edit",
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: (userId) => dispatch(fetchBoards(userId)),
  createPin: (formData) => dispatch(createPin(formData)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PinForm)
);
