import { stopSubmit } from 'redux-form';
import {profileAPI, authAPI, secureAPI} from '../api/api';

const setAuthUserData = (data) => ({type: AUTH, data}),
		serAvatarSrc = (src) => ({type: AVATAR_SRC, src}),
		nullMyData = () => ({type: NULL_MY_DATA}),
		getCaptchaAC = (url) => ({type: GET_CAPTCHA, url});

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
	captcha: null
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
		.then(res => {
			if(res.data.resultCode === 0){
				dispatch(setAuthUserData(res.data))
				profileAPI.getUserProfile(res.data.data.id)
					.then(res => dispatch(serAvatarSrc(res.data.photos.small)))
			}
		});
}

export const authMe =  (email, password, rememberMe, captcha) =>  (dispatch) => {

	return authAPI.logInMe(email, password, rememberMe, captcha)
	.then(respond => respond.data.resultCode === 0 ? dispatch(getAuthData()) 
																	: respond.data.resultCode === 10
																	? dispatch(getCaptchaThunk())
																	: respond.data)
																	// dispatch(stopSubmit('login', {_error: respond.data.messages[0]})))
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
