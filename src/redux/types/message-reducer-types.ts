import {ADD_MESSAGE, ADD_PEN_PAL_MESSAGE} from '../message-reducer';


export type dataMessageType = {
	message: string
	penPalId: number
}

export type addMessageType = {
	type: typeof ADD_MESSAGE
	data: dataMessageType
}

export type dataPenPalType = {
	fullName: string
	userId: number
	photos: {small: string}
}

export type dioalogsTypes = {
	name: string
	id: number
	avatar: string
	messages: object[]
}

export type initStateType = {
	dialogs: dioalogsTypes[]
}

export type penPalDataType = {
	type: typeof ADD_PEN_PAL_MESSAGE
	data: dataPenPalType
}

export type ActionType = addMessageType | penPalDataType;
