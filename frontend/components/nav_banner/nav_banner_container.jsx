import NavBanner from "./nav_banner";
import { connect } from "react-redux";
import { logIn, signUp, logOut } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  signUp: (user) => dispatch(signUp(user)),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBanner);
