import {
  RECEIVE_CONTENT
} from '../actions/ui_actions';

const contentReducer = ( state = {} , action ) => {
  Object.freeze(state) 
  switch(action.type) {
    case RECEIVE_CONTENT:
      const content = Object.assign({}, state, { [action.id]: action.content })
      return content
    default:
      return state
  }
}

export default contentReducer