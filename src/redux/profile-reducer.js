import { profileAPI} from '../api/api';

export const postMesssgeActioncreator = (post) => ({type: ADD_POST, post});
const setDataProfile = (profile) => ({type: SET_PROFILE, profile});
const setUserStatus = (status) => ({type: USER_STATUS, status})
export const deletePostAC = (id) => ({type: DELETE_POST, id})

const ADD_POST = 'profile_reducer/ADD_POST';
const INPUT_POST_CHANGE = 'profile_reducer/INPUT_POST_CHANGE';
const SET_PROFILE = 'profile_reducer/SET_PROFILE';
const USER_STATUS = 'profile_reducer/USER_STATUS';
const DELETE_POST = 'profile_reducer/DELETE_POST';


export const profileUserDataThunk = (userId) => (dispatch) => {
		profileAPI.getUserProfile(userId)
			.then(res => dispatch(setDataProfile(res.data)))
}
export const getUserStatusThunk = (id) => (dispatch) => {
	profileAPI.getUserStatus(id)
		.then(res => dispatch(setUserStatus(res.data)))
}
export const putMyStatusOnServerThunk = (status) => (dispatch) => {
	profileAPI.updateMyStatus(status)
		.then(res => {
			if(!res.data.resultCode) dispatch(setUserStatus(status))
		})
} 
const addPost = (state, post) => {
	return {
		...state,
		postData: [...state.postData, {id: '6', text: post, like: '0'} ]
	}
}

const setProfile = (state, profileData) => {
	
	return {...state, profileUserData: profileData}
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
	temporaryValue: '',
	profileUserData: null,
	userStatus: 'status',
	
}

const profileReducer = (state = initState, action) => {

	switch(action.type){
		case ADD_POST:
			return addPost(state, action.post);
		case DELETE_POST: 
			return {...state, postData: state.postData.filter(elem => elem.id !== action.id)}
		case SET_PROFILE:
			return setProfile(state, action.profile);
		case USER_STATUS:
			return {...state, userStatus: action.status}
		default: 
			return state;
	}
}
export default profileReducer;