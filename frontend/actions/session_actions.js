import * as SessionApiUtil from '../util/session_api_util'

// Session actions to interact with state. Session controller can create
// destroy and provide auth errors

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => {
  return { type: RECEIVE_CURRENT_USER,
  user }
};

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})


export const logIn = user => dispatch => {
  return (SessionApiUtil.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors))))
};

export const logOut = () => dispatch => (
  SessionApiUtil.logOut()
    .then(() => dispatch(logOutCurrentUser()),
    errors => dispatch(receiveErrors(errors)))
);

export const signUp = user => dispatch => {
  // debugger
  return (SessionApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))))
};