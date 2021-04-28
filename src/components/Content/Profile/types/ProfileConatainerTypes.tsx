import { RouteComponentProps } from "react-router";
import { postDataType, profileDataType, sendPostType } from "../../../../redux/types/profile-reducer-types";


export type PathParamsType = {userId: string}

export interface TStateProps {
	profileUserData: profileDataType
	userStatus: string
	postData: postDataType

	isAvatarUploading:  boolean
	isErrorUpdateAvatar: boolean
	isUserFollow: boolean
	isUserFollowUploading: boolean
	isUserFollowUploadFail: boolean
	isProfileUserUploading: boolean
	isProfileUserUploadFail: boolean
	isUserStatusUploading: boolean
	isUserStatusUploadFail: boolean
	authData: {id: number, isAuth: boolean}
}

export interface TDispatchProps {
	getIsUserFollowed: (id:  number) => (dispatch: any) => void
	getUserStatus: (id:  number) => (dispatch: any) => void
	getUserProfile: (userId: number) => (dispatch: any) => void
	updateStatus: (status: string) => (dispatch: any) => Promise<object>
	sendPost: (post: string) => sendPostType
	updateAvatar: (url: string) => (dispatch: any) => void
	updateProfileData: (data: profileDataType) => (dispatch: any, getState: any) => Promise<object>
	followUser: (id:  number) => (dispatch: any) => void
	unfollowUser: (id:  number) => (dispatch: any) => void
}

export type PropsTypes = RouteComponentProps<PathParamsType> & TStateProps & TDispatchProps;
