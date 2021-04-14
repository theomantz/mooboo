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
