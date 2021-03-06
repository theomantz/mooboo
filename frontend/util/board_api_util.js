export const fetchBoards = userId => (
  $.ajax({
    url: 'api/boards',
    method: 'GET',
    data: { user_id: userId }
  })
);

export const fetchAllBoards = () => {
  return(
    $.ajax({
      url: 'api/boards',
      method: 'GET'
    })
  )
}

export const fetchBoard = boardId => (
  $.ajax({
    url: `api/boards/${boardId}`,
    method: 'GET'
  })
);

export const updateBoard = board => (
  $.ajax({
    url: `api/boards/${board.id}`,
    method: 'PATCH',
    data: { board }
  })
);

export const createBoard = board => (
  $.ajax({
    url: 'api/boards',
    method: 'POST',
    data: { board }
  })
);

export const addPin = (boardId, pinId) => (
  $.ajax({
    url: `/api/boards/${boardId}/${pinId}`,
    method: 'POST'
  })
);

export const deleteBoard = boardId => (
  $.ajax({
    url: `api/boards/${boardId}`,
    method: 'DELETE'
  })
);


export const removePin = (boardId, pinId) => (
  $.ajax({
    url: `api/boards/${boardId}/${pinId}`,
    method: "DELETE",
  })
);