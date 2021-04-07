import { combineReducers } from 'redux';
import colsReducer from './cols_reducer';
import heightReducer from './height_reducer';

const documentReducer = combineReducers({
  columns: colsReducer,
  height: heightReducer
})

export default documentReducer;