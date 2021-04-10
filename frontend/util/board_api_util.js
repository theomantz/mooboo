export const fetchBoards = userId => (
  $.ajax({
    url: 'api/boards',
    method: 'GET',
    data: { userId }
  })
);

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