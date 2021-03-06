import {
  RECEIVE_BOARD_ERRORS,
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD
} from '../actions/board_actions'

const boardErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_BOARD_ERRORS:
      return Object.values(action.errors.responseJSON)
    case RECEIVE_ALL_BOARDS:
      return []
    case RECEIVE_BOARD:
      return []
    default:
      return state
  }
}

export default boardErrorsReducer;