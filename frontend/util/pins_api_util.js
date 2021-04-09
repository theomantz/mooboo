export const fetchPin = pinId => (
  $.ajax({
    url: `api/pins/${pinId}`,
    method: 'GET'
  })
);

export const fetchPins = (numCols) => (
  $.ajax({
    url: 'api/pins',
    method: 'GET',
  })
);
