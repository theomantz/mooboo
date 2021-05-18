import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import { logIn } from '../../actions/session_actions';
import { clearSession } from '../../actions/session_actions'

const mapStateToProps = ( { errors } ) => {
  return {
    errors: errors.session,
    formType: 'login',
    linkTo: 'signup',
    linkText: 'not on mooboo? sign up instead.'
  }
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(logIn(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
  clearErrors: () => dispatch(clearSession()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)