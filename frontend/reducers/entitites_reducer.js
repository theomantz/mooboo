import { combineReducers } from 'redux'
import usersReducer from './users_reducer'

const entitesReducer = combineReducers({
  users: usersReducer
});

export default entitesReducer;