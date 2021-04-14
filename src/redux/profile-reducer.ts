import {profileAPI} from '../api/api';
import {setAvatarSrcOnHeader} from './auth-reucer';
import { sendPostType, deletePostType, dataProfileType, 
			userStatusType, avatarSrcType,isAvatarUploadingType,
			errorUpdateAvatarType, isUserFollowType,
			isUserFollowUploadingType, isUserFollowUploadFailType, 
			isProfileUserUploadingType,isProfileUserUploadFailType, 
			isUserStatusUploadingType, isUserStatusUploadFailType,
			profileDataType, initStateType } from "./types/profile-reducer-types";


// action creators
export const sendPost = (post: string): sendPostType => ({type: ADD_POST, post});
export const deletePostAC = (id:  number):deletePostType => ({type: DELETE_POST, id})
export const setDataProfile = (profile: profileDataType): dataProfileType => ({type: SET_PROFILE, profile});
const setUserStatus = (status: string): userStatusType => ({type: USER_STATUS, status}),
		setAvatarSrc = (url: string): avatarSrcType => ({type: SET_AVATAR_SRC, url}),
		setIsAvatarUploading = (): isAvatarUploadingType => ({type: IS_AVATAR_UPLOAD}),
		setErrorUpdateAvatar = (): errorUpdateAvatarType => ({type: AVATAR_UPDATE_ERROR}),
		setIsUserFollow = (boolean: boolean):isUserFollowType => ({type: IS_USER_FOLLOW, boolean}),
		setIsUserFollowUploading = (boolean: boolean): isUserFollowUploadingType => ({type: IS_USER_FOLLOW_UPLOADING, boolean}),
		setIsUserFollowUploadFail = (boolean: boolean): isUserFollowUploadFailType => ({type: IS_USER_FOLLOW_UPLOAD_FAIL, boolean}),
		setIsProfileUserUploading = (boolean: boolean): isProfileUserUploadingType => ({type: PROFILE_UPLOADING, boolean}),
		setIsProfileUserUploadFail = (boolean: boolean): isProfileUserUploadFailType => ({type: PROFILE_UPLOAD_FAIL, boolean}),
		setIsUserStatusUploading = (boolean: boolean): isUserStatusUploadingType => ({type: STATUS_UPLOADING, boolean}),
		setIsUserStatusUploadFail = (boolean: boolean): isUserStatusUploadFailType => ({type: STATUS_UPLOAD_FAIL, boolean});

// type for action
export const ADD_POST = 'profile_reducer/ADD_POST';
export const SET_PROFILE = 'profile_reducer/SET_PROFILE';
export const USER_STATUS = 'profile_reducer/USER_STATUS';
export const DELETE_POST = 'profile_reducer/DELETE_POST';
export const SET_AVATAR_SRC = 'profile_reducer/SET_AVATAR_SRC';
export const IS_AVATAR_UPLOAD ='profile_reducer/IS_AVATAR_UPLOAD';
export const AVATAR_UPDATE_ERROR = 'profile_reducer/AVATAR_UPDATE_ERROR';
export const IS_USER_FOLLOW = 'profile_reducer/IS_USER_FOLLOW';
export const IS_USER_FOLLOW_UPLOADING = 'profile_reducer/IS_USER_FOLLOW_UPLOADING';
export const IS_USER_FOLLOW_UPLOAD_FAIL = 'profile_reducer/IS_USER_FOLLOW_UPLOAD_FAIL';
export const PROFILE_UPLOADING = 'profile_reducer/PROFILE_UPLOADING';
export const PROFILE_UPLOAD_FAIL = 'profile_reducer/PROFILE_UPLOAD_FAIL';
export const STATUS_UPLOADING = 'profile_reducer/STATUS_UPLOADING';
export const STATUS_UPLOAD_FAIL = 'profile_reducer/STATUS_UPLOAD_FAIL';

// helper functions for the reducer to be smaller
const addPost = (state: any, post: string) => 
			({...state, postData: [{id: state.postData.length + 1, text: post, like: '0', date: new Date(Date.now())}, ...state.postData]}),
		setProfile = (state: any, profileData: profileDataType) => ({...state, profileUserData: profileData}),
		deletePost = (state: any, id:  number) =>
			({...state, postData: state.postData.filter((elem: any) => elem.id !== id)}),
		setStatus = (state: any, status: string) => ({...state, userStatus: status}),
		setAvatar = (state: any, image: string) => 
			({...state, profileUserData: {...state.profileUserData, photos: image}});

// initial state
const initState: initStateType= {
	postData: [{
			id: 1,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis facilisis commodo. Donec vitae ante in sem auctor viverra eu.',
			like: 33,
			date: new Date('9/11/2020')
		},
		{
			id: 2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			like: 3,
			date: new Date('10/15/2020')
		},
		{
			id: 3,
			text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed',
			like: 53,
			date: new Date('11/17/2020')
		},
		{
			id: 4,
			text: 'turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo',
			like: 63,
			date: new Date('12/18/2020')
		},
		{
			id: 5,
			text: 'massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit',
			like: 14,
			date: new Date('10/11/2022')
		},
	],
	profileUserData: {
		aboutMe: '',
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
	isProfileUserUploading: false,
	isProfileUserUploadFail: false,
	isUserStatusUploading: false,
	isUserStatusUploadFail: false,
}

// reducer
const profileReducer = (state = initState, action: any) => {
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
			return {...state, isUserFollowUploading: action.boolean};
		case IS_USER_FOLLOW_UPLOAD_FAIL:
			return {...state, isUserFollowUploadFail: action.boolean};
		case PROFILE_UPLOADING:
			return {...state, isProfileUserUploading: action.boolean}
		case PROFILE_UPLOAD_FAIL:
			return {...state, isProfileUserUploadFail: action.boolean}
		case STATUS_UPLOADING:
			return {...state, isUserStatusUploading: action.boolean}
		case STATUS_UPLOAD_FAIL:
			return {...state, isUserStatusUploadFail: action.boolean}
		default:
			return state;
	}
}

// thunks get data user
export const getUserProfile = (userId: number) => async (dispatch: any) => {
	try {
		dispatch(setIsProfileUserUploadFail(false));
		dispatch(setIsProfileUserUploading (true))
		const res = await profileAPI.getUserProfile(userId)

		if(res.status === 200){
	
			dispatch(setDataProfile(res.data));
			dispatch(setIsProfileUserUploading (false));
		}
		return res;
	}catch(e){
		dispatch(setIsProfileUserUploading (false));
		dispatch(setIsProfileUserUploadFail(true));
	}
}

export const getUserStatus = (id:  number) => async (dispatch: any) => {
	try {
		dispatch(setIsUserStatusUploadFail (false));
		dispatch(setIsUserStatusUploading (true));
		const res = await profileAPI.getUserStatus(id)
		if(res.status === 200) {
			dispatch(setIsUserStatusUploading (false));
			dispatch(setUserStatus(res.data));
		}
	}catch(e){
		dispatch(setIsUserStatusUploadFail (true));
		dispatch(setIsUserStatusUploading (false));
	}
}

export const getIsUserFollowed = (id:  number) => async (dispatch: any) => {
	const res = await profileAPI.getIsUserFollowed(id)
	dispatch(setIsUserFollow(res.data))
}

// thunks update data user
export const updateStatus = (status: string) => (dispatch: any) => {
	 return profileAPI.updateUserStatus(status)
				.then((res: any) => res.data.resultCode === 0 && dispatch(setUserStatus(status)))
				.catch((error: any) => error);
}

export const updateAvatar = (url: string) =>  (dispatch: any) => {
	dispatch(setIsAvatarUploading()) //set true
	profileAPI.postAvatar(url)
		.then((res: any) => res.data.resultCode === 0 
							&& dispatch(setAvatarSrc(res.data.data.photos)) 
							&& dispatch(setAvatarSrcOnHeader(res.data.data.photos.small)))
		.catch(() => {
			dispatch(setIsAvatarUploading()) // set false
			dispatch(setErrorUpdateAvatar())
			setTimeout(() => dispatch(setErrorUpdateAvatar()), 3000)
		})
		.finally(()=> dispatch(setIsAvatarUploading())) // set false
}

export const updateProfileData = (data: profileDataType) => (dispatch: any, getState: any) => {
	 return profileAPI.postDataProfile(data)
	 	.then((res: any) => {
			res.data.resultCode === 0 && dispatch(getUserProfile(getState().auth.id));
			return res;
	})
}

// helper function to avoid duplicate code in followUser and unfollowUser thunk
const followUnfollowUser = async (id:  number, methodAPI: Function, dispatch: any, boolean: boolean) => {
	dispatch(setIsUserFollowUploading(true));
	dispatch(setIsUserFollowUploadFail(false));
	try{
		const res = await methodAPI(id)
		if(res.data.resultCode === 0){
			dispatch(setIsUserFollow(boolean));
			dispatch(setIsUserFollowUploading(false));
		}
	}catch(e){
		dispatch(setIsUserFollowUploading(false))
		dispatch(setIsUserFollowUploadFail(true))
		setTimeout(()=> dispatch(setIsUserFollowUploadFail(false)), 3000);
	}
	
}
export const followUser = (id:  number) => (dispatch: any) => followUnfollowUser(id, profileAPI.followUser, dispatch, true);
export const unfollowUser = (id:  number) => (dispatch: any) => followUnfollowUser(id, profileAPI.unfollowUser, dispatch, false);

export default profileReducer;