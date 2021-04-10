export const fetchBoards = userId => ({
  url: 'api/boards',
  method: 'GET',
  data: { userId }
});

export const fetchBoard = boardId => ({
  url: `api/boards/${boardId}`,
  method: 'GET'
});

export const updateBoard = board => ({
  url: `api/boards/${board.id}`,
  method: 'PATCH',
  data: { board }
});