import {createStore, combineReducers} from 'redux';
import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import findUsersReducer from './findUsers-reducer';
import authReducer from './auth-reucer';

const reducers = combineReducers({
	profile: profileReducer,
	messages: messageReducer,
	sidebar: sidebarReducer,
	findUsers: findUsersReducer,
	auth: authReducer
})

const store = createStore(reducers);

export default store;