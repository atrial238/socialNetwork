export const postMesssgeActioncreator = () => ({type: ADD_POST});
export const changeGlobalStatePostActionCreator = (value) => ({type: INPUT_POST_CHANGE, value});


const ADD_POST = 'ADD_POST';
const INPUT_POST_CHANGE = 'INPUT_POST_CHANGE';


const addPost = (state) => {
	// const stateCopy = {...state};
	// stateCopy.postData = [...state.postData];
	// stateCopy.postData.push( {id: '6', text: state.temporaryValue, like: '0'} );
	// stateCopy.temporaryValue = '';
	// return stateCopy;
	return {
		...state,
		postData: [...state.postData, {id: '6', text: state.temporaryValue, like: '0'} ],
		temporaryValue: ''

	}
}
const changeStateWhenTextareaInput = (state, valueInput) => {
	// const stateCopy = {...state};
	// stateCopy.temporaryValue = valueInput;
	// return stateCopy;
	return {
		...state,
		temporaryValue: valueInput
	}
}
const initState = {
	postData: [{
		id: '1',
		text: 'Something really important was written here1',
		like: '33'
	},
	{
		id: '2',
		text: 'Something really important was written here2',
		like: '3'
	},
	{
		id: '3',
		text: 'Something really important was written here3',
		like: '53'
	},
	{
		id: '4',
		text: 'Something really important was written here4',
		like: '63'
	},
	{
		id: '5',
		text: 'Something really important was written here5',
		like: '14'
	},
	],
	temporaryValue: ''
}

const profileReducer = (state = initState, action) => {
	switch(action.type){
		case ADD_POST:
			return addPost(state);
		case INPUT_POST_CHANGE:
			return changeStateWhenTextareaInput (state, action.value);
		default: 
			return state;
	}
}
export default profileReducer;