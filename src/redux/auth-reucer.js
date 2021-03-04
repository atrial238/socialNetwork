import {profileAPI, authAPI} from '../api/api';

const AUTH = 'AUTH';
const AVATAR_SRC = 'AVATAR_SRC'

export const setAuthUserData = (data) => ({type: AUTH, data});
export const serAvatarSrc = (src) => ({type: AVATAR_SRC, src});

export const getAuthData = () => (dispatch) => {
	
		authAPI.isAuthorization()
			.then(res => {
				dispatch(setAuthUserData(res.data))
				const userId = res.data.data.id;
		profileAPI.getUserProfile(2)
				.then(res => dispatch(serAvatarSrc(res.data.photos.small)))
		});
	
}
export const authMe = (formData) => {
	authAPI.logIn(formData)
		.then(res => !res.data.resultCode ? getAuthData() : null)
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
		default: 
			return state;
	}
}
export default authReducer;