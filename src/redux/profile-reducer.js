import {profileAPI} from '../api/api';
import {setAvatarSrcOnHeader} from './auth-reucer';

// action creators
export const sendPost = post => ({type: ADD_POST, post});
export const deletePostAC = id => ({type: DELETE_POST, id})
export const setDataProfile = profile => ({type: SET_PROFILE, profile});
const setUserStatus = status => ({type: USER_STATUS, status}),
		setAvatarSrc = url => ({type: SET_AVATAR_SRC, url}),
		setIsAvatarUploading = () => ({type: IS_AVATAR_UPLOAD}),
		setErrorUpdateAvatar = () => ({type: AVATAR_UPDATE_ERROR}),
		setIsUserFollow = (boolean) => ({type: IS_USER_FOLLOW, boolean}),
		setIsUserFollowUploading = (boolean) => ({type: IS_USER_FOLLOW_UPLOADING, boolean}),
		setIsUserFollowUploadFail = (boolean) => ({type: IS_USER_FOLLOW_UPLOAD_FAIL, boolean});

// type for action
const ADD_POST = 'profile_reducer/ADD_POST',
		SET_PROFILE = 'profile_reducer/SET_PROFILE',
		USER_STATUS = 'profile_reducer/USER_STATUS',
		DELETE_POST = 'profile_reducer/DELETE_POST',
		SET_AVATAR_SRC = 'profile_reducer/SET_AVATAR_SRC',
		IS_AVATAR_UPLOAD ='profile_reducer/IS_AVATAR_UPLOAD',
		AVATAR_UPDATE_ERROR = 'profile_reducer/AVATAR_UPDATE_ERROR',
		IS_USER_FOLLOW = 'profile_reducer/IS_USER_FOLLOW',
		IS_USER_FOLLOW_UPLOADING = 'profile_reducer/IS_USER_FOLLOW_UPLOADING',
		IS_USER_FOLLOW_UPLOAD_FAIL = 'profile_reducer/IS_USER_FOLLOW_UPLOAD_FAIL';

// helper functions for the reducer to be smaller
const addPost = (state, post) => 
			({...state, postData: [...state.postData, {id: state.postData.length + 1, text: post, like: '0', date: new Date(Date.now())}]}),
		setProfile = (state, profileData) => ({...state, profileUserData: profileData}),
		deletePost = (state, id) =>
			({...state, postData: state.postData.filter(elem => elem.id !== id)}),
		setStatus = (state, status) => ({...state, userStatus: status}),
		setAvatar = (state, image) => 
			({...state, profileUserData: {...state.profileUserData, photos: image}});

// initial state
const initState = {
	postData: [{
			id: '1',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis facilisis commodo. Donec vitae ante in sem auctor viverra eu.',
			like: '33',
			date: new Date('9/11/2020')
		},
		{
			id: '2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			like: '3',
			date: new Date('10/15/2020')
		},
		{
			id: '3',
			text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed',
			like: '53',
			date: new Date('11/17/2020')
		},
		{
			id: '4',
			text: 'turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo',
			like: '63',
			date: new Date('12/18/2020')
		},
		{
			id: '5',
			text: 'massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit',
			like: '14',
			date: new Date('10/11/2022')
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
	isUserFollow: true,
	isUserFollowUploading: false,
	isUserFollowUploadFail: false,
	isAvatarUploading: false,
	isErrorUpdateAvatar: false,
}

// reducer
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
		case IS_USER_FOLLOW:
			return {...state, isUserFollow: action.boolean};
		case IS_USER_FOLLOW_UPLOADING:
			return {...state, isUserFollowUploading: action.boolean}
		case IS_USER_FOLLOW_UPLOAD_FAIL:
			return {...state, isUserFollowUploadFail: action.boolean}
		default:
			return state;
	}
}

// thunk get data user
export const getUserProfile = (userId) => async (dispatch) => {
	const res = await profileAPI.getUserProfile(userId)
	dispatch(setDataProfile(res.data))
	return res;
}

export const getUserStatus = (id) => async (dispatch) => {
	const res = await profileAPI.getUserStatus(id)
	dispatch(setUserStatus(res.data));
}
export const getIsUserFollowed = (id) => async (dispatch) => {
	
	const res = await profileAPI.getIsUserFollowed(id)
	dispatch(setIsUserFollow(res.data))
}

// thunk update data user
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

const followUnfollowUser = async (id, methodAPI, dispatch, boolean) => {
	dispatch(setIsUserFollowUploading(true));
	dispatch(setIsUserFollowUploadFail(false));
	try{
		const res = await methodAPI(id)
		if(res.data.resultCode === 0){
			dispatch(setIsUserFollow(boolean));
			dispatch(setIsUserFollowUploading(false));
		}
	}catch(e){
		console.log(1)
		dispatch(setIsUserFollowUploading(false))
		dispatch(setIsUserFollowUploadFail(true))
		setTimeout(()=> dispatch(setIsUserFollowUploadFail(false)), 3000);
	}
	
}
export const followUser = (id) => (dispatch) => followUnfollowUser(id, profileAPI.followUser, dispatch, true);
export const unfollowUser = (id) => (dispatch) => followUnfollowUser(id, profileAPI.unfollowUser, dispatch, false);

export default profileReducer;