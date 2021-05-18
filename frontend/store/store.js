import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {

  let middleware
  
  if (process.env.NODE_ENV === 'production') {
    middleware = [thunk]
  } else {
    middleware = [thunk, logger]
  }

  return createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
  
}


export default configureStore;