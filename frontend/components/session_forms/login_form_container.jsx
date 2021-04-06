import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import SessionForm from './session_form';
import { logIn } from '../../actions/session_actions';

const mapStateToProps = ( { errors } ) => {
  return {
    errors: Object.values(errors.session),
    formType: 'login',
    navLink: <Link to='/signup'>sign up</Link>
  }
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(logIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)