import { combineReducers } from 'redux';
import documentReducer from './document_reducer'
import messageReducer from './message_reducer'

const uiReducer = combineReducers({
  document: documentReducer,
  messages: messageReducer
})

export default uiReducer;