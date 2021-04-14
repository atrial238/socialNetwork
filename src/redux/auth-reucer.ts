import {authAPI, secureAPI} from '../api/api';
import {userDataType, authUserDataType, nullMyDataType,
	 getCaptchaType, avatarSrcOnHeaderType, stateInitType} from './types/auth-reucer-types';

const setAuthUserData = (data: userDataType): authUserDataType => ({type: AUTH, data}),
		nullMyData = (): nullMyDataType => ({type: NULL_MY_DATA}),
		getCaptchaAC = (url: string): getCaptchaType => ({type: GET_CAPTCHA, url});
export const setAvatarSrcOnHeader = (src: any): avatarSrcOnHeaderType => ({type: AVATAR_SRC, src});

export const AUTH = 'auth_reducer/AUTH';
export const AVATAR_SRC = 'auth_reducer/AVATAR_SRC';
export const NULL_MY_DATA= 'auth_reducer/NULL_MY_DATA';
export const GET_CAPTCHA = 'GET_CAPTCHA';

const stateInit: stateInitType = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	avatar: null,
	captcha: ''
}

const authReducer = (state = stateInit, action: any) => {
	
	switch(action.type){
		case AUTH: 
		console.log(action.data)
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
export const getAuthData = () => (dispatch: any) => {

	return authAPI.isAuthorization()
		.then((res: any) => res.data.resultCode === 0 ? dispatch(setAuthUserData(res.data)) : res)
		.catch((error: any) => error)
}

export const loginUser =  (email: string, password: string, rememberMe: boolean, captcha: string) =>  (dispatch: any) => {

	return authAPI.loginUser(email, password, rememberMe, captcha)
			.then((respond: any) => respond.data.resultCode === 0 
										? dispatch(getAuthData()) 
										: respond.data.resultCode === 10
										? dispatch(getCaptchaThunk())
										: respond.data
			)
			.catch((error: any) => error);
}

export const logoutUser = () => async (dispatch: any) => {
	const res = await authAPI.logoutUser();
	if(!res.data.resultCode) dispatch(nullMyData()) 
}

export const getCaptchaThunk = () => async (dispatch: any) => {
	const res = await secureAPI.getCaptcha();
	dispatch(getCaptchaAC(res.data.url));
}
export default authReducer;