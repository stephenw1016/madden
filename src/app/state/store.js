import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import * as reducers from './stores';

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false
});

export default function configureStore() {
  return createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      thunkMiddleWare,
      loggerMiddleware
    )
  );
}
