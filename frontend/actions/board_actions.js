import * as BoardApiUtils from '../util/board_api_util';

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

export const createBoard = board => dispatch => {
  return(
    BoardApiUtils.createBoard(board)
      .then(board => dispatch(receiveBoard(board)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const addPinToBoard = ( boardId, pinId ) => {
  return(
    BoardApiUtils.addPin(boardId, pinId)
      .then(message => dispatch(receiveSuccessMessage(message)),
      errors => dispatch(receiveBoardErrors(errors)) )
  )
}

