export const postMesssgeActioncreator = () => ({type: ADD_POST});
export const changeGlobalStatePostActionCreator = (value) => ({type: INPUT_POST_CHANGE, value});


const ADD_POST = 'ADD_POST';
const INPUT_POST_CHANGE = 'INPUT_POST_CHANGE';


const addPost = (state) => {
	state.postData.push( {id: '6', text: state.temporaryValue, like: '0'} );
	state.temporaryValue = '';
	return state;
}
const changeStateWhenTextareaInput = (state, valueInput) => {
	state.temporaryValue = valueInput;
	return state;
}


const profileReducer = (state, action) => {
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