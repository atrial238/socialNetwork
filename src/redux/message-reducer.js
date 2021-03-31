import {profileAPI} from '../api/api';

export const sendMessage = (message) => ({type: ADD_MESSAGE, message});
const setPenPalData = data => ({type: ADD_PEN_PAL_MESSAGE, data})

const ADD_MESSAGE = 'message_reducer/ADD_MESSAGE';
const ADD_PEN_PAL_MESSAGE = 'message_reducer/ADD_PEN_PAL_MESSAGE';

const addMessage = (state, message)  =>({
		...state,
		arrMessages: [...state.arrMessages, {id: state.arrMessages.length + 1, text: message}]
})
const fakeMessages = [{penPal: ["it's pen pal's message 1"]},
							{authUser: ["it's authorized user's message1"]},
							{penPal: ["it's pen pal's message 2"]},
							{authUser: ["it's authorized user's message 2"]}]

const addPenPalData = (state, {fullName, userId, photos}) => {
	
	return {
		...state,
		dialogs: [...state.dialogs, {name: fullName, id: userId, avatar: photos.small, messages: fakeMessages}]
	}
}

const initState = {
	dialogs: [],
	arrMessages: [{
		id: 1,
		text: 'some message1',
	},
	{
		id: 2,
		text: 'some message2',
	},
	{
		id: 3,
		text: 'some message3',
	},
	{
		id: 4,
		text: 'some message4',
	},
	]
}
const messageReducer = (state = initState, action) => {
	switch(action.type){
		case ADD_MESSAGE:
			return addMessage(state, action.message);
		case ADD_PEN_PAL_MESSAGE:
			return addPenPalData(state, action.data)
		default: 
			return state;
	}
}


export const getPenPals = fakePenPal => dispatch => {
	const respond = fakePenPal.map(panPelId => {
						return profileAPI.getUserProfile(panPelId)
							.then(res => {
								 res.status === 200 && dispatch(setPenPalData(res.data))
							})
					})
	return Promise.all(respond).then(() => 'loadingComplete')
}

export default messageReducer;