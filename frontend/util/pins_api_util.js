export const fetchPin = pinId => (
  $.ajax({
    url: `api/pins/${pinId}`,
    method: 'GET'
  })
);

export const fetchPins = () => (
  $.ajax({
    url: 'api/pins',
    method: 'GET',
  })
);

export const updatePin = pin => (
  $.ajax({
    url: `api/pins/${pin.id}`,
    method: 'PATCH',
    data: { pin }
  })
);

export const fetchPinByUser = userId => (
  $.ajax({
    url: `api/users/pins/${userId}`,
    method: 'GET'
  })
);

export const deletePin = pinId => (
  $.ajax({
    url: `api/pins/${pinId}`,
    method: 'DELETE'
  })
);


export const removePin = (boardId, pinId) => (
  $.ajax({
    url: `api/boards/${boardId}/${pinId}`,
    method: 'DELETE'
  })
)