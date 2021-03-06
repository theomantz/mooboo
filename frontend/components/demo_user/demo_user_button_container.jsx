import { connect } from "react-redux";
import DemoUser from "./demo_user_button";
import { logIn } from "../../actions/session_actions";

const mapStateToProps = ({ session }) => {
  return {
    currentUser: Boolean(session.id),
    demoUser: {
      email: "demo@moooboo.io",
      password: "password",
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoUser);
