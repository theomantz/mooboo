export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const updateUser = (userFormData, user) => {
  return(
    $.ajax({
      url: `api/users/${user.id}`,
      method: 'PUT',
      data: userFormData,
      contentType: false,
      processData: false
    })
  )
};

export const followUser = (userId, followeeId) => {
  return(
    $.ajax({
      url: `api/users/${userId}/${followeeId}`,
      method: 'POST'
    })
  )
};

export const unfollowUser = (userId, followeeId) => {
  return(
    $.ajax({
      url: `api/users/${userId}/${followeeId}`,
      method: 'DELETE'
    })
  )
};