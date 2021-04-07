import { combineReducers } from 'redux';
import documentReducer from './document_reducer'

const uiReducer = combineReducers({
  document: documentReducer
})

export default uiReducer;