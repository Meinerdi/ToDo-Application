import { combineReducers, createStore } from 'redux';
import { rootReducer } from './rootReducer';

let reducers = combineReducers({
  rootReducer: rootReducer,
});

export const store = createStore(reducers);
