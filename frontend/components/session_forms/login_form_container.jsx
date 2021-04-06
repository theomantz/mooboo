import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn } from '../../actions/session_actions';
import { clearSession } from '../../actions/session_actions'

const mapStateToProps = ( { errors } ) => {
  return {
    errors: errors.session,
    formType: 'login',
    linkTo: '/signup',
    linkText: 'not on mooboo? sign up instead.'
  }
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)