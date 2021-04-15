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

export const createPin = formData => {
  return(
    $.ajax({
      url: 'api/pins',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const updatePin = (formData, pin) =>
  $.ajax({
    url: `api/pins/${pin.id}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false,
  });

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