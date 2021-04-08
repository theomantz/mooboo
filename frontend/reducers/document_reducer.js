import { combineReducers } from 'redux';
import colsReducer from './cols_reducer';
import heightReducer from './height_reducer';
import contentReducer from './content_reducer'

const documentReducer = combineReducers({
  columns: colsReducer,
  height: heightReducer,
  content: contentReducer
})

export default documentReducer;