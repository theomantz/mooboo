import { combineReducers } from 'redux'
import pinsReducer from './pins_reducer';
import usersReducer from './users_reducer'
import boardsReducer from './board_reducer'

const entitesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer,
  users: usersReducer
});

export default entitesReducer;