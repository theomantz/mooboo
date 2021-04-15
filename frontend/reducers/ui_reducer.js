import { combineReducers } from 'redux';
import documentReducer from './document_reducer'
import messageReducer from './message_reducer'
import modalReducer from './modal_reducer'

const uiReducer = combineReducers({
  document: documentReducer,
  messages: messageReducer,
  modal: modalReducer
})

export default uiReducer;