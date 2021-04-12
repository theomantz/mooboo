import {
  RECEIVE_SUCCESS_MESSAGE
} from '../actions/board_actions'

const messagesReducer = ( state = [], action ) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SUCCESS_MESSAGE:
      return action.message.responseJSON
    default:
      return []
  }
}

export default messagesReducer