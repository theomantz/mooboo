import * as BoardApiUtils from '../util/board_api_util';

export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_SUCCESS_MESSAGE = 'RECEIVE_SUCCESS_MESSAGE';

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
});

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

const receiveSuccessMessage = message => ({
  type: RECEIVE_SUCCESS_MESSAGE,
  message
})

const removeBoard = (boardId) => ({
  type: REMOVE_BOARD,
  boardId
})

export const fetchBoard = boardId => dispatch => {
  return( 
    BoardApiUtils.fetchBoard(boardId)
    .then( board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const fetchBoards = userId => dispatch => {
  return(
    BoardApiUtils.fetchBoards(userId)
      .then(boards => dispatch(receiveAllBoards(boards)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const fetchAllBoards = () => dispatch => {
  return(
    BoardApiUtils.fetchAllBoards()
      .then(boards => dispatch(receiveAllBoards(boards)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const createBoard = board => dispatch => {
  return(
    BoardApiUtils.createBoard(board)
      .then(board => dispatch(receiveBoard(board)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const addPinToBoard = ( boardId, pinId ) => dispatch => {
  return(
    BoardApiUtils.addPin(boardId, pinId)
      .then(message => dispatch(receiveSuccessMessage(message)),
      errors => dispatch(receiveBoardErrors(errors)) )
  )
};

export const updateBoard = board => dispatch => {
  return(
    BoardApiUtils.updateBoard(board)
      .then(board => dispatch(receiveBoard(board)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const deleteBoard = boardId => dispatch => {
  return(
    BoardApiUtils.deleteBoard(boardId)
      .then(boardId => dispatch(removeBoard(boardId)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
};

export const removePin = (boardId, pinId) => dispatch => {
  return(
    BoardApiUtils.removePin(boardId, pinId)
      .then(board => dispatch(receiveBoard(board)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
};