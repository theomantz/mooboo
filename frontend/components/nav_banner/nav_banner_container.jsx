import NavBanner from "./nav_banner";
import { connect } from "react-redux";
import { logIn, signUp, logOut } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ entities: { users }, session }) => {
  return {
    currentUser: users[session.id],
  }
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  signUp: (user) => dispatch(signUp(user)),
  logOut: () => dispatch(logOut()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBanner);
