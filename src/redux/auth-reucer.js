import { stopSubmit } from 'redux-form';
import {profileAPI, authAPI, secureAPI} from '../api/api';
import {getUserProfile} from './profile-reducer';

const setAuthUserData = (data) => ({type: AUTH, data}),
		nullMyData = () => ({type: NULL_MY_DATA}),
		getCaptchaAC = (url) => ({type: GET_CAPTCHA, url});
export const setAvatarSrc = (src) => ({type: AVATAR_SRC, src});

const AUTH = 'auth_reducer/AUTH',
		AVATAR_SRC = 'auth_reducer/AVATAR_SRC',
		NULL_MY_DATA= 'auth_reducer/NULL_MY_DATA',
		GET_CAPTCHA = 'GET_CAPTCHA';

const stateInit = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	avatar: null,
	captcha: ''
}

const authReducer = (state = stateInit, action) => {
	
	switch(action.type){
		case AUTH: 
			return {...state, ...action.data.data, isAuth: true, captcha: null};
		case AVATAR_SRC:
			return {...state, avatar: action.src}
		case NULL_MY_DATA:
			return {...state, id: null, login: null, email: null, isAuth: false, avatar: null}
		case GET_CAPTCHA:
			return {...state, captcha: action.url}
		default: 
			return state;
	}
}
export const getAuthData = () => (dispatch) => {

	return authAPI.isAuthorization()
		.then(res => res.data.resultCode === 0 
							? dispatch(setAuthUserData(res.data))
							: res
		)
		.catch(error => error)
}

export const loginUser =  (email, password, rememberMe, captcha) =>  (dispatch) => {

	return authAPI.loginUser(email, password, rememberMe, captcha)
			.then(respond => respond.data.resultCode === 0 
										? dispatch(getAuthData()) 
										: respond.data.resultCode === 10
										? dispatch(getCaptchaThunk())
										: respond.data
			)
			.catch(error => error);
}

export const logoutUser = () => async (dispatch) => {
	const res = await authAPI.logoutUser();
	if(!res.data.resultCode) dispatch(nullMyData()) 
}

export const getCaptchaThunk = () => async (dispatch) => {
	const res = await secureAPI.getCaptcha();
	dispatch(getCaptchaAC(res.data.url));
}
export default authReducer;
