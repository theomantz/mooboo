import { combineReducers } from 'redux'
import pinsReducer from './pins_reducer';
import usersReducer from './users_reducer'

const entitesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer
});

export default entitesReducer;