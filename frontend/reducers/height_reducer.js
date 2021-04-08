import { RECEIVE_HEIGHT } from '../actions/ui_actions';


const heightReducer = (state = null, action)  => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_HEIGHT:
      return action.height
    default:
      return state
  }
}

export default heightReducer