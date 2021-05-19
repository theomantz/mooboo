export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const fetchUsersByRelation = (user) => {
  return (
      $.ajax({
        url: `api/users/${user.id}/follows`,
        method: 'GET',
      })
    )
}

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

export const followUser = (currentUserId, userId) => {
  return(
    $.ajax({
      url: `api/users/${currentUserId}/${userId}`,
      method: 'POST'
    })
  )
};

export const unfollowUser = (currentUserId, userId) => {
  return(
    $.ajax({
      url: `api/users/${currentUserId}/${userId}`,
      method: 'DELETE'
    })
  )
};