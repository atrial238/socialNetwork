import { ThunkDispatch } from 'redux-thunk';
import {  AUTH, AVATAR_SRC, NULL_MY_DATA, GET_CAPTCHA  } from '../auth-reucer';
import { stateType } from '../store';

type dataType = {
	id: number | null
	email: string
	login: string
}

export type userDataType = {
	data: dataType
	fieldsErrors: []
	messages: []
	resultCode: number
}
export type authUserDataType = {
	type: typeof AUTH
	data: userDataType
}

export type nullMyDataType = {type: typeof NULL_MY_DATA}

export type getCaptchaType = {
	type: typeof GET_CAPTCHA
	url: string
}

export type avatarSrcOnHeaderType = {
	type: typeof AVATAR_SRC
	src: string
}

export type stateInitType = {
	id: null | number,
	login: null | string,
	email: null | string,
	isAuth: boolean,
	avatar: null | string,
	captcha: null | string
}

export type ActionAuthType = authUserDataType | nullMyDataType | getCaptchaType | avatarSrcOnHeaderType;

export type DispatchType = ThunkDispatch<stateType, unknown, ActionAuthType>