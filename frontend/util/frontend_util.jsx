import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Router } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to='/home'/>} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => 
      loggedIn ? <Component {...props} /> : <Redirect to='/' /> } />
)

const ConditionalRedirect = ({ loggedIn, from, exact }) => (
  <Redirect
    exact={exact}
    from={from}
    to={ loggedIn ? '/home' : '/' } />
)


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);

export const AuthRedirect = withRouter(
  connect(
    mapStateToProps,
    null
  )(ConditionalRedirect)
);