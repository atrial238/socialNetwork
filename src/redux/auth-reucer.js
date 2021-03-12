import { stopSubmit } from 'redux-form';
import {profileAPI, authAPI} from '../api/api';

const AUTH = 'auth_reducer/AUTH';
const AVATAR_SRC = 'auth_reducer/AVATAR_SRC'
const NULL_MY_DATA= 'auth_reducer/NULL_MY_DATA';

const setAuthUserData = (data) => ({type: AUTH, data});
const serAvatarSrc = (src) => ({type: AVATAR_SRC, src});
const nullMyData = () => ({type: NULL_MY_DATA});

export const getAuthData = () => (dispatch) => {

	return authAPI.isAuthorization()
			.then(res => {
				dispatch(setAuthUserData(res.data))
				const userId = res.data.data.id;
		profileAPI.getUserProfile(userId)
				.then(res => dispatch(serAvatarSrc(res.data.photos.small)))
		});
}

export const authMe =  (email, password, rememberMe) => async (dispatch) => {

	const respond = await authAPI.logInMe(email, password, rememberMe);
	!respond.data.resultCode ? dispatch(getAuthData()) 
									 : dispatch(stopSubmit('login', {_error: respond.data.messages[0]}))
}

export const logOutMe = () => async (dispatch) => {

	const res = await authAPI.logOutMe();
	if(!res.data.resultCode) dispatch(nullMyData()) 
}

const stateInit = {
	id: null,
	login: null,
	email: null,
	resultCode: 0,
	avatar: null
}

const authReducer = (state = stateInit, action) => {
	
	switch(action.type){
		case AUTH: 
			return {...state, ...action.data.data, resultCode: action.data.resultCode};
		case AVATAR_SRC:
			return {...state, avatar: action.src}
		case NULL_MY_DATA:
			return {...state, id: null, login: null, email: null, resultCode: 1, avatar: null}
		default: 
			return state;
	}
}
export default authReducer;
