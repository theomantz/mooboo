import { RECEIVE_NUM_COLS } from '../actions/ui_actions'

const colsReducer = ( state = null, action ) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_COLS:
      return action.numCols
    default:
      return state
  }
}

export default colsReducer