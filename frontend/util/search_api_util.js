export const search = (query) => {
  return(
    $.ajax({
      url: 'api/search',
      method: 'GET',
      data: { query }
    })
  )
}