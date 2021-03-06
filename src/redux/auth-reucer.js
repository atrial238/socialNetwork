import {profileAPI, authAPI} from '../api/api';

const AUTH = 'AUTH';
const AVATAR_SRC = 'AVATAR_SRC'
const NULL_MY_DATA= 'NULL_MY_DATA';

export const setAuthUserData = (data) => ({type: AUTH, data});
export const serAvatarSrc = (src) => ({type: AVATAR_SRC, src});
const nullMyData = () => ({type: NULL_MY_DATA});

export const getAuthData = () => (dispatch) => {

		authAPI.isAuthorization()
			.then(res => {
				dispatch(setAuthUserData(res.data))
				const userId = res.data.data.id;
		profileAPI.getUserProfile(2)
				.then(res => dispatch(serAvatarSrc(res.data.photos.small)))
		});
}
export const authMe = (email, password, rememberMe) => (dispatch) =>{
	authAPI.logInMe(email, password, rememberMe)
		.then(res => !res.data.resultCode ? dispatch(getAuthData()) : null)
}
export const logOutMe = () => (dispatch) => {

	authAPI.logOutMe()
		.then(res => !res.data.resultCode ? dispatch(nullMyData()) : null)
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
