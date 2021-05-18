import * as UserApiUtil from '../util/user_api_util'
export const REMOVE_USERS = 'REMOVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const removeUsers = () => ({
  type: CLEAR_USERS
})

export const fetchUser = userId => dispatch => {
  return(
    UserApiUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveUserErrors(err)))
  )
};

export const fetchUsers = data => dispatch => {
  return (
    UserApiUtil.fetchUsersByRelation(data)
      .then(users => dispatch(receiveUsers(users)),
      err => dispatch(receiveUserErrors(err)))
  )
}

export const updateUser = (formData, user) => dispatch => {
  return(
    UserApiUtil.updateUser(formData, user)
      .then(user => dispatch(receiveUser(user)),
      errors => dispatch(receiveUserErrors(errors)))
  )
};

export const followUser = (currentUserId, userId) => {
  return (
    UserApiUtil.followUser(currentUserId, userId)
      .then(user => dispatchEvent(receiveUser(user),
      err => dispatch(receiveUserErrors(err))))
  )
}

export const unfollowUser = (currentUserId, userId) => {
  return (
    UserApiUtil.unfollowUser(currentUserId, userId)
      .then(user => dispatchEvent(receiveUser(user),
      err => dispatch(receiveUserErrors(err))))
  )
}

export const clearUsers = () => {
  () => dispatch(clearUsers())
}