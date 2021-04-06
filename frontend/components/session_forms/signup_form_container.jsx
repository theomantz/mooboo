import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import SessionForm from "./session_form";
import { signUp } from "../../actions/session_actions";

const mapStateToProps = ( { errors } ) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>
  }
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
