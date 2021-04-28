import { ThunkDispatch } from 'redux-thunk';
import { ADD_POST, SET_PROFILE,
			USER_STATUS, DELETE_POST,
			SET_AVATAR_SRC, IS_AVATAR_UPLOAD,
			AVATAR_UPDATE_ERROR, IS_USER_FOLLOW,
			IS_USER_FOLLOW_UPLOADING, IS_USER_FOLLOW_UPLOAD_FAIL,
			PROFILE_UPLOADING, PROFILE_UPLOAD_FAIL ,
			STATUS_UPLOADING, STATUS_UPLOAD_FAIL} from '../profile-reducer';
import { stateType } from '../store';
import { avatarSrcOnHeaderType } from './auth-reucer-types';

export type contactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}
export type profileDataType = {
	aboutMe: string
	fullName: string
	lookingForAJOb: boolean
	lookingForAJobDescription: string
	userId: number
	photos: {large: string, small: string}
	contacts: contactsType
}
export type sendPostType = {type: typeof ADD_POST, post: string}
export type deletePostType = {type: typeof DELETE_POST, id: number}
export type dataProfileType = {type: typeof SET_PROFILE, profile: profileDataType }
export type userStatusType = {type: typeof USER_STATUS, status: string }
export type avatarSrcType = {type: typeof SET_AVATAR_SRC, url: string }
export type isAvatarUploadingType = {type: typeof IS_AVATAR_UPLOAD }
export type errorUpdateAvatarType = {type: typeof AVATAR_UPDATE_ERROR }
export type isUserFollowType = {type: typeof IS_USER_FOLLOW, boolean: boolean }
export type isUserFollowUploadingType = {type: typeof IS_USER_FOLLOW_UPLOADING, boolean: boolean }
export type isUserFollowUploadFailType = {type: typeof IS_USER_FOLLOW_UPLOAD_FAIL, boolean: boolean }
export type isProfileUserUploadingType = {type: typeof PROFILE_UPLOADING, boolean: boolean }
export type isProfileUserUploadFailType = {type: typeof PROFILE_UPLOAD_FAIL, boolean: boolean }
export type isUserStatusUploadingType = {type: typeof STATUS_UPLOADING, boolean: boolean }
export type isUserStatusUploadFailType = {type: typeof STATUS_UPLOAD_FAIL, boolean: boolean }

export type postDataType = {
	id: number
	text: string
	like: number
	date: object
}
export type initStateType = {
		postData: postDataType[]
		profileUserData: profileDataType
		userStatus: string,
		isUserFollow: boolean,
		isUserFollowUploading: boolean,
		isUserFollowUploadFail: boolean,
		isAvatarUploading: boolean,
		isErrorUpdateAvatar: boolean,
		isProfileUserUploading: boolean,
		isProfileUserUploadFail: boolean,
		isUserStatusUploading: boolean,
		isUserStatusUploadFail: boolean,
}

export type ActionType = sendPostType |deletePostType |dataProfileType |userStatusType | avatarSrcOnHeaderType
									|avatarSrcType |isAvatarUploadingType |errorUpdateAvatarType |isUserFollowType|
									isUserFollowUploadingType |isUserFollowUploadFailType |isProfileUserUploadingType 
									|isProfileUserUploadFailType |isUserStatusUploadingType| isUserStatusUploadFailType;

export type DispatchType = ThunkDispatch<stateType, unknown, ActionType>
