import {profileAPI} from '../api/api';

export const sendMessage = (message, penPalId) => ({type: ADD_MESSAGE, data: {message, penPalId}});
const setPenPalData = data => ({type: ADD_PEN_PAL_MESSAGE, data})

const ADD_MESSAGE = 'message_reducer/ADD_MESSAGE';
const ADD_PEN_PAL_MESSAGE = 'message_reducer/ADD_PEN_PAL_MESSAGE';

const fakeMessages = [{penPal: ["it's pen pal's message 1"]},
							{authUser: ["it's authorized user's message1"]},
							{penPal: ["it's pen pal's message 2"]},
							{authUser: ["it's authorized user's message 2"]}]

const addMessage = (state, data) => ({
		...state,
			dialogs: [...state.dialogs.map(dialog => 
				dialog.id === data.penPalId
					? {...dialog, messages: [...dialog.messages, {authUser: [data.message]}]}
					: dialog)]
	});
	
const addPenPalData = (state, {fullName, userId, photos}) => ({
		...state,
		dialogs: [...state.dialogs, {name: fullName, id: userId, avatar: photos.small, messages: fakeMessages}]
	})

const initState = {dialogs: []};

const messageReducer = (state = initState, action) => {
	switch(action.type){
		case ADD_MESSAGE:
			return addMessage(state, action.data);
		case ADD_PEN_PAL_MESSAGE:
			return addPenPalData(state, action.data);
		default: 
			return state;
	}
}

export const getPenPals = fakePenPal => dispatch => {
	const respond = fakePenPal.map(penPalId => profileAPI.getUserProfile(penPalId)
		.then(res => res.status === 200 && dispatch(setPenPalData(res.data))))

	return Promise.all(respond).then(() => 'loadingComplete')
}

export default messageReducer;