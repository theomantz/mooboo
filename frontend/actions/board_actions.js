import * as BoardApiUtils from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

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

export const fetchBoard = boardId => dispatch => {
  return( 
    BoardApiUtils.fetchBoard(boardId)
    .then( board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveBoardErrors(errors)))
  )
}

export const fetchBoards = (userId) => dispatch => {
  return(
    BoardApiUtils.fetchBoards(userId)
      .then(boards => dispatch(receiveAllBoards(boards)),
      errors => dispatch(receiveBoardErrors(errors)))
  )
}

