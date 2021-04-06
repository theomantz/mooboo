import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn } from '../../actions/session_actions';

const mapStateToProps = ( { errors } ) => {
  return {
    errors: Object.values(errors.session),
    formType: 'login',
    linkTo: '/signup',
    linkText: 'not on mooboo? sign up instead.'
  }
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(logIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)