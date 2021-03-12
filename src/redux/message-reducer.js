export const sendMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});
export const changeGlobalStateMessageActionCreator = (value) => ({type: INPUT_MESSAGE_CHANGE, value});

const ADD_MESSAGE = 'message_reducer/ADD_MESSAGE';
const INPUT_MESSAGE_CHANGE = 'message_reducer/INPUT_MESSAGE_CHANGE';

const addMessage = (state, message)  =>{
	
	const newObjMessage = {
		text: message,
		pathImg: 'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'
	};
	return {
		...state,
		arrMessages: [...state.arrMessages, newObjMessage]
	}
}


const initState = {
	dialogsData: [{
		name: 'Andrew',
		id: '1',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		name: 'Dmitry',
		id: '2',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		name: 'Sasha',
		id: '3',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		name: 'Sveta',
		id: '4',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		name: 'Valera',
		id: '5',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		name: 'Viktor',
		id: '6',
		path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	],
	arrMessages: [{
		id: 1,
		text: 'some message1',
		pathImg: 'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'
	},
	{
		id: 2,
		text: 'some message2',
		pathImg: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'
	},
	{
		id: 3,
		text: 'some message3',
		pathImg: 'https://i.pinimg.com/564x/e5/98/79/e598794d58d186cc128fb73862cd24d2.jpg'
	},
	{
		id: 4,
		text: 'some message4',
		pathImg: 'https://i.pinimg.com/564x/e8/10/e5/e810e518b6014817f18295b16015047b.jpg'
	},
	]
}
const messageReducer = (state = initState, action) => {
	switch(action.type){
		case ADD_MESSAGE:
			return addMessage(state, action.message);
		default: 
			return state;
	}
}
export default messageReducer;