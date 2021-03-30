import {profileAPI} from '../api/api';
import {setAvatarSrcOnHeader} from './auth-reucer';

export const sendPost = post => ({type: ADD_POST, post});
export const deletePostAC = id => ({type: DELETE_POST, id})
export const setDataProfile = profile => ({type: SET_PROFILE, profile});
const setUserStatus = status => ({type: USER_STATUS, status}),
		setAvatarSrc = url => ({type: SET_AVATAR_SRC, url}),
		setIsAvatarUploading = () => ({type: IS_AVATAR_UPLOAD}),
		setErrorUpdateAvatar = () => ({type: AVATAR_UPDATE_ERROR});

const ADD_POST = 'profile_reducer/ADD_POST',
		SET_PROFILE = 'profile_reducer/SET_PROFILE',
		USER_STATUS = 'profile_reducer/USER_STATUS',
		DELETE_POST = 'profile_reducer/DELETE_POST',
		SET_AVATAR_SRC = 'profile_reducer/SET_AVATAR_SRC',
		IS_AVATAR_UPLOAD ='profile_reducer/IS_AVATAR_UPLOAD',
		AVATAR_UPDATE_ERROR = 'profile_reducer/AVATAR_UPDATE_ERROR';
		
const addPost = (state, post) => 
			({...state,postData: [...state.postData, {id: '6', text: post, like: '0'}]}),
		setProfile = (state, profileData) => ({...state, profileUserData: profileData}),
		deletePost = (state, id) =>
			({...state,postData: state.postData.filter(elem => elem.id !== id)}),
		setStatus = (state, status) => ({...state, userStatus: status}),
		setAvatar = (state, image) => 
			({...state, profileUserData: {...state.profileUserData, photos: image}});

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
	profileUserData: {
		fullName: '',
		lookingForAJOb: false,
		lookingForAJobDescription: false,
		userId: '',
		photos: {large: '', small: ''}, 
		contacts: {
			facebook: '',
			website: '',
			vk: '',
			twitter: '',
			instagram: '',
			youtube: '',
			github: '',
			mainLink: ''
					},
	},
	userStatus: '',
	isAvatarUploading: false,
	isErrorUpdateAvatar: false,
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
		case SET_AVATAR_SRC:
			return setAvatar(state, action.url);
		case IS_AVATAR_UPLOAD:
			return {...state, isAvatarUploading: !state.isAvatarUploading};
		case AVATAR_UPDATE_ERROR:
			return {...state, isErrorUpdateAvatar: !state.isErrorUpdateAvatar};
		default:
			return state;
	}
}

export const getUserProfile = (userId) => async (dispatch) => {
	const res = await profileAPI.getUserProfile(userId)
	dispatch(setDataProfile(res.data))
	return res;
}

export const getUserStatus = (id) => async (dispatch) => {
	const res = await profileAPI.getUserStatus(id)
	dispatch(setUserStatus(res.data));
}

export const updateStatus = (status) => (dispatch) => {
	 return profileAPI.updateUserStatus(status)
				.then(res => res.data.resultCode === 0 && dispatch(setUserStatus(status)))
				.catch(error => error);
}

export const updateAvatar = url =>  (dispatch) => {
	dispatch(setIsAvatarUploading()) //set true
	profileAPI.postAvatar(url)
		.then(res => res.data.resultCode === 0 
							&& dispatch(setAvatarSrc(res.data.data.photos)) 
							&& dispatch(setAvatarSrcOnHeader(res.data.data.photos.small)))
		.catch(() => {
			dispatch(setIsAvatarUploading()) // set false
			dispatch(setErrorUpdateAvatar())
			setTimeout(() => dispatch(setErrorUpdateAvatar()), 3000)
		})
		.finally(()=> dispatch(setIsAvatarUploading())) // set false
}

export const updateProfileData = data => (dispatch, getState) => {
	 return profileAPI.postDataProfile(data)
	 	.then(res => {
			res.data.resultCode === 0 && dispatch(getUserProfile(getState().auth.id));
			return res;
	})
}

export default profileReducer;