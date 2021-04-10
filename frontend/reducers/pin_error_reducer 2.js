import {
  RECEIVE_PIN_ERRORS,
  RECEIVE_PINS,
  RECEIVE_PIN,
} from '../actions/pins_actions';

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state) 
  switch(action.type) {
    case RECEIVE_PIN_ERRORS:
      return Object.values(action.errors.responseJSON)
    case RECEIVE_PIN:
      return []
    case RECEIVE_PINS:
      return []
    default:
      return state
  }
}

export default pinErrorsReducer;