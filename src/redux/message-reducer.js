export const sendMessage = (message) => ({type: ADD_MESSAGE, message});

const ADD_MESSAGE = 'message_reducer/ADD_MESSAGE';

const addMessage = (state, message)  =>({
		...state,
		arrMessages: [...state.arrMessages, {id: state.arrMessages.length + 1, text: message}]
})


const initState = {
	dialogs: [{
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
		default: 
			return state;
	}
}
export default messageReducer;