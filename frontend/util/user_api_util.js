export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
);

export const updateUser = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PUT',
    data: { user }
  })
);
