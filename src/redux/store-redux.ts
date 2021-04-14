import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reucer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { configureStore } from '@reduxjs/toolkit';
import initApp from './app-reducer';

const reducers = combineReducers({
	profile: profileReducer,
	messages: messageReducer,
	sidebar: sidebarReducer,
	findUsers: findUsersReducer,
	auth: authReducer,
	form: formReducer,
	app: initApp
})

declare global {
	interface Window {
	  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleWare)));


export default store;