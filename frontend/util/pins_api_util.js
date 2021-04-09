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
)
