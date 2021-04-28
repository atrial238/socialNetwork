import { ThunkDispatch } from 'redux-thunk';
import {profileAPI} from '../api/api';
import { stateType } from './store';
import {addMessageType, dataMessageType,
	 		dataPenPalType, initStateType,
	  		dioalogsTypes, penPalDataType, ActionType} from './types/message-reducer-types';

export const sendMessage = (message: string, penPalId: number): addMessageType => ({type: ADD_MESSAGE, data: {message, penPalId}});
const setPenPalData = (data: dataPenPalType): penPalDataType => ({type: ADD_PEN_PAL_MESSAGE, data})

export const ADD_MESSAGE = 'message_reducer/ADD_MESSAGE';
export const ADD_PEN_PAL_MESSAGE = 'message_reducer/ADD_PEN_PAL_MESSAGE';

const fakeMessages = [{penPal: ["it's pen pal's message 1"]},
							{authUser: ["it's authorized user's message1"]},
							{penPal: ["it's pen pal's message 2"]},
							{authUser: ["it's authorized user's message 2"]}]

const addMessage = (state: initStateType, data: dataMessageType) => ({
		...state,
			dialogs: [...state.dialogs.map((dialog: dioalogsTypes) => 
				dialog.id === data.penPalId
					? {...dialog, messages: [...dialog.messages, {authUser: [data.message]}]}
					: dialog)]
	});
	
const addPenPalData = (state: initStateType, dataPenPal: dataPenPalType) => ({
		...state,
		dialogs: [...state.dialogs, 
						{
							name: dataPenPal.fullName,
							id: dataPenPal.userId, 
							avatar: dataPenPal.photos.small, 
							messages: fakeMessages
						}
					]
	})

const initState: initStateType = {dialogs: []};

const messageReducer = (state = initState, action: ActionType) => {
	switch(action.type){
		case ADD_MESSAGE:
			return addMessage(state, action.data);
		case ADD_PEN_PAL_MESSAGE:
			return addPenPalData(state, action.data);
		default: 
			return state;
	}
}

export const getPenPals = (fakePenPal: number[]) => (dispatch: ThunkDispatch<stateType, unknown, ActionType>) => {
	const respond = fakePenPal.map((penPalId: number) => profileAPI.getUserProfile(penPalId)
		.then((res: any) => res.status === 200 && dispatch(setPenPalData(res.data))))

	return Promise.all(respond).then(() => 'loadingComplete')
}

export default messageReducer;