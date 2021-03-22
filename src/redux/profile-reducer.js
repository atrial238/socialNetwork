import {profileAPI} from '../api/api';

export const sendMessage = post => ({type: ADD_POST, post});
export const deletePostAC = id => ({type: DELETE_POST, id})
const setDataProfile = profile => ({type: SET_PROFILE, profile});
const setUserStatus = status => ({type: USER_STATUS, status});
const uploadAvatar = file => ({type: UPLOAD_AVATAR, file});

const ADD_POST = 'profile_reducer/ADD_POST',
		SET_PROFILE = 'profile_reducer/SET_PROFILE',
		USER_STATUS = 'profile_reducer/USER_STATUS',
		DELETE_POST = 'profile_reducer/DELETE_POST',
		UPLOAD_AVATAR = 'UPLOAD_AVATAR';

const addPost = (state, post) => 
			({...state,postData: [...state.postData, {id: '6', text: post, like: '0'}]}),
		setProfile = (state, profileData) => ({...state, profileUserData: profileData}),
		deletePost = (state, id) =>
			({...state,postData: state.postData.filter(elem => elem.id !== id)}),
		setStatus = (state, status) => ({...state, userStatus: status}),
		setAvatar = (state, image) => 
			({...state,profileUserData: {...state.profileUserData,photos: image}});

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
	profileUserData: null,
	userStatus: 'status',
}

const profileReducer = (state = initState, action) => {

	switch (action.type) {
		case ADD_POST:
			return addPost(state, action.post);
		case DELETE_POST:
			return deletePost(state, action.id)
		case SET_PROFILE:
			return setProfile(state, action.profile);
		case USER_STATUS:
			return setStatus(state, action.status);
		case UPLOAD_AVATAR:
			return setAvatar(state, action.file)
		default:
			return state;
	}
}

export const getUserProfile = (userId) => async (dispatch) => {
	const res = await profileAPI.getUserProfile(userId)
	dispatch(setDataProfile(res.data))
}

export const getUserStatus = (id) => async (dispatch) => {
	const res = await profileAPI.getUserStatus(id)
	dispatch(setUserStatus(res.data))
}

export const updateStatus = (status) => async (dispatch) => {
	const res = await profileAPI.updateMyStatus(status)
	if (!res.data.resultCode) dispatch(setUserStatus(status))
}

export const updateAvatar = file => async (dispatch) => {
	const res = await profileAPI.postAvatar(file);
	if (!res.data.resultCode) dispatch(uploadAvatar(res.data.data.photos));
}

export const updateProfileData = data => async (dispatch, getState) => {
	const res = await profileAPI.postDataProfile(data);
	if (!res.data.resultCode) dispatch(getUserProfile(getState().auth.id));
	return res
}

export default profileReducer;