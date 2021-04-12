import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_error_reducer'
import boardErrorsReducer from './board_errors_reducer'
import userErrorsReducer from './user_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  pins: pinErrorsReducer,
  board: boardErrorsReducer,
  user: userErrorsReducer
});

export default errorsReducer;