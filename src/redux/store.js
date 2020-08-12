import { combineReducers, createStore } from 'redux';
import { appReducer } from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
  appReducer: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
