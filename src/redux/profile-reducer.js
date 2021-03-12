import { profileAPI} from '../api/api';

export const postMesssgeActioncreator = (post) => ({type: ADD_POST, post});
export const deletePostAC = (id) => ({type: DELETE_POST, id})
const setDataProfile = (profile) => ({type: SET_PROFILE, profile});
const setUserStatus = (status) => ({type: USER_STATUS, status})

const ADD_POST = 'profile_reducer/ADD_POST',
		SET_PROFILE = 'profile_reducer/SET_PROFILE',
		USER_STATUS = 'profile_reducer/USER_STATUS',
		DELETE_POST = 'profile_reducer/DELETE_POST';

const addPost = (state, post) => {
			return {
				...state,
				postData: [...state.postData, {id: '6', text: post, like: '0'} ]
			}
		},
 		setProfile = (state, profileData) => ({...state, profileUserData: profileData}),
		deletePost = (state, id) => ({...state, postData: state.postData.filter(elem => elem.id !== id)}),
		setStatus = (state, status) => ({...state, userStatus: status});

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
			return deletePost(state, action.id)
		case SET_PROFILE:
			return setProfile(state, action.profile);
		case USER_STATUS:
			return setStatus(state, action.status)
		default: 
			return state;
	}
}

export const profileUserDataThunk = (userId) => async (dispatch) => {
	const res = await profileAPI.getUserProfile(userId)
		 dispatch(setDataProfile(res.data))
}

export const getUserStatusThunk = (id) => async (dispatch) => {
 const res = await profileAPI.getUserStatus(id)
	 dispatch(setUserStatus(res.data))
}

export const putMyStatusOnServerThunk = (status) => async (dispatch) => {
	const res = await profileAPI.updateMyStatus(status)
	if(!res.data.resultCode) dispatch(setUserStatus(status))
}

export default profileReducer;