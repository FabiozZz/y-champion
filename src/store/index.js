import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { auth_reducer } from './reducers/auth_reducer';
import { general } from './reducers/general_reducer';

const rootReducer = combineReducers({ auth: auth_reducer, general });

export const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
