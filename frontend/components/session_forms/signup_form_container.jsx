import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import SessionForm from "./session_form";
import { signUp } from "../../actions/session_actions";
import { clearSession } from "../../actions/session_actions";
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = ( { errors } ) => {
  return {
    errors: errors.session,
    formType: 'signup',
    linkTo: '/login',
    linkText: 'already on mooboo? log in instead'
  }
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearSession()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
