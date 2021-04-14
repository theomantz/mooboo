import {
  RECEIVE_PINS,
  RECEIVE_PIN,
  REMOVE_PIN
} from '../actions/pins_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_PINS:
      return action.pins
    case RECEIVE_PIN:
      return Object.assign({}, { [action.pin.id]: action.pin })
    case REMOVE_PIN:
      let nextState = Object.assign({}, state)
      delete nextState[action.pinId]
      return nextState
    default:
      return state
  }
}

export default pinsReducer;