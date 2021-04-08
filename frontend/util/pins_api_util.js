

export const fetchPins = () => (
  $.ajax({
    url: 'api/pins',
    method: 'GET',
    error: error => console.log('api request failed', error)
  })
);