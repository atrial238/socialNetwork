export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeGlobalStateMessageActionCreator = (value) => ({type: INPUT_MESSAGE_CHANGE, value});

const ADD_MESSAGE = 'ADD_MESSAGE';
const INPUT_MESSAGE_CHANGE = 'INPUT_MESSAGE_CHANGE';

const addMessage = (state)  =>{
	
	let newObjMessage = {
		text: state.temporaryMessage,
		pathImg: 'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'
	};
	state.arrMessages.push(newObjMessage);
	state.temporaryMessage = '';
	return state;
}
const changeStateWhenMessageTyping = (state, value) => {
	state.temporaryMessage = value;
	return state;
}
const messageReducer = (state, action) => {
	switch(action.type){
		case ADD_MESSAGE:
			return addMessage(state);
		case INPUT_MESSAGE_CHANGE:
			return changeStateWhenMessageTyping(state, action.value);
		default: 
			return state;
	}
}
export default messageReducer;