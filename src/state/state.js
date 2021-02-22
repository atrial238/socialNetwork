let renderAllApp = '';

const state = {
	content: {
		messages: {
			dialogsData: [
				{ name: 'Andrew', id: '1', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
				{ name: 'Dmitry', id: '2', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
				{ name: 'Sasha', id: '3', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
				{ name: 'Sveta', id: '4', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
				{ name: 'Valera', id: '5', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
				{ name: 'Viktor', id: '6', path: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg' },
			],
			arrMessages: [
				{ text: 'some message1', pathImg:  'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'},
				{ text: 'some message2', pathImg:  'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'},
				{ text: 'some message3', pathImg:  'https://i.pinimg.com/564x/e5/98/79/e598794d58d186cc128fb73862cd24d2.jpg'},
				{ text: 'some message4', pathImg:  'https://i.pinimg.com/564x/e8/10/e5/e810e518b6014817f18295b16015047b.jpg'},
			],
			temporaryMessage: ''
		},
		profile: {
			postData: [
				{id: '1', text: 'Something really important was written here1', like: '33'},
				{id: '2', text: 'Something really important was written here2', like: '3'},
				{id: '3', text: 'Something really important was written here3', like: '53'},
				{id: '4', text: 'Something really important was written here4', like: '63'},
				{id: '5', text: 'Something really important was written here5', like: '14'},
			],
			temporaryValue: ''
		}
	},
	sidebar: {
		friends: [
			{name: 'andrew', src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'},
			{name: 'Sasha', src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'},
			{name: 'Viktoria', src: 'https://i.pinimg.com/564x/cd/20/b0/cd20b0c8a4fbab1419c2a5059b110f6b.jpg'},
		]
	},
	renderAllApp: '',
	subscribe: (observer) => {
		this.renderAllApp = observer;
	},
	addPost: () => {
		const newObj = {id: '6', text: this.content.profile.temporaryValue, like: '0'};
		this.content.profile.postData.push(newObj);
		this.content.profile.temporaryValue = '';
		renderAllApp(this);
	},
	changeStateWhenTextareaInput: (valueInput) => {
		this.content.profile.temporaryValue = valueInput;
		renderAllApp(this);
	},
	addMessage: () => {
		let newObjMessage = { 
			text: this.content.messages.temporaryMessage,
			pathImg:  'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'
		};
		this.content.messages.arrMessages.push(newObjMessage);
		this.content.messages.temporaryMessage ='';
		renderAllApp(this);
	},
	changeStateWhenMessageTyping: (value) => {
		this.content.messages.temporaryMessage = value;
		renderAllApp(this);
	}

}

window.state = state;

export const subscribe = (observer) => {
	renderAllApp = observer;
}
export const addPost = () => {
	
	const newObj = {id: '6', text: state.content.profile.temporaryValue, like: '0'};
	state.content.profile.postData.push(newObj);
	state.content.profile.temporaryValue = '';
	renderAllApp(state);
}
export const changeStateWhenTextareaInput = (valueInput) => {
	
	state.content.profile.temporaryValue = valueInput;
	renderAllApp(state);
}

export const addMessage = () => {
	let newObjMessage = { 
		text: state.content.messages.temporaryMessage,
		pathImg:  'https://i.pinimg.com/564x/a3/79/29/a3792984c6423f3c216e39a193e93d48.jpg'
	};
	state.content.messages.arrMessages.push(newObjMessage);
	state.content.messages.temporaryMessage ='';
	renderAllApp(state);
}
export const changeStateWhenMessageTyping = (value) => {
	state.content.messages.temporaryMessage = value;
	renderAllApp(state);
}
export default state;