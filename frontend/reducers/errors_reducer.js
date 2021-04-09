import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_error_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  pins: pinErrorsReducer
});

export default errorsReducer;