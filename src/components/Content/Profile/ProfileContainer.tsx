import React, { useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from "react-router-dom";

import HeaderProfile from './HeaderProfile/HeaderProfile';
import BodyProfile from './BodyProfile/BodyProfile';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import { updateProfileData, getUserProfile, getUserStatus, getIsUserFollowed,
	updateStatus, sendPost, updateAvatar, followUser, unfollowUser } from '../../../redux/profile-reducer';
import { stateType } from '../../../redux/store';
import { profileDataType, postDataType, sendPostType} from '../../../redux/types/profile-reducer-types';

type PathParamsType = {userId: string}

interface TStateProps {
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

interface TDispatchProps {
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

type PropsTypes = RouteComponentProps<PathParamsType> & TStateProps & TDispatchProps;

const ProfileContainer: React.FC<PropsTypes> = props => {

// get profile user from server or redirect to login page
	useEffect(() => {
		const userIdFromUrl = props.match.params.userId,
				userIdFromAuthData = props.authData.id;

		if (!userIdFromUrl && !userIdFromAuthData) props.history.push('/login')
			props.getUserProfile(+userIdFromUrl || +userIdFromAuthData);
			props.getUserStatus(+userIdFromUrl || +userIdFromAuthData);
			userIdFromUrl && props.getIsUserFollowed(+userIdFromUrl);

	}, [props.match.params.userId]);

	const isOwner = props.match.params.userId === undefined;

// destructuring props
	const { profileUserData,
				userStatus,
				updateStatus,
				postData,
				sendPost,
				updateAvatar,
				updateProfileData,
				isAvatarUploading,
				isErrorUpdateAvatar,
				isUserFollow,
				followUser, 
				unfollowUser,
				isUserFollowUploading,
				isUserFollowUploadFail,
				isProfileUserUploading,
				isProfileUserUploadFail,
				isUserStatusUploading,
				isUserStatusUploadFail} = props;

// splitting props
	const headerProfileProps = {
			updateAvatar, 
			avatar: profileUserData.photos.large,
			isOwner,
			isAvatarUploading,
			isErrorUpdateAvatar,
			nameUser: profileUserData.fullName,
			userStatus,
			updateStatus,
			isUserFollow,
			followUser, 
			unfollowUser,
			userId: profileUserData.userId,
			isUserFollowUploading,
			isUserFollowUploadFail,
			isProfileUserUploading,
			isProfileUserUploadFail,
			isUserStatusUploading,
			isUserStatusUploadFail
	}
	const bodyProfileProps = {...profileUserData, isOwner, updateProfileData, postData, sendPost, isProfileUserUploading};

		return (
			<>
				<ErrorBoundary><HeaderProfile {...headerProfileProps} /></ErrorBoundary>
				<ErrorBoundary><BodyProfile {...bodyProfileProps}/></ErrorBoundary>
			</>
	)
}

const mapStateToProps = (state: stateType) => ({
		profileUserData: state.profile.profileUserData,
		userStatus: state.profile.userStatus,
		authData: { id: state.auth.id, isAuth: state.auth.isAuth },
		postData: state.profile.postData,
		isAvatarUploading: state.profile.isAvatarUploading,
		isErrorUpdateAvatar: state.profile.isErrorUpdateAvatar,
		isUserFollow: state.profile.isUserFollow,
		isUserFollowUploading: state.profile.isUserFollowUploading,
		isUserFollowUploadFail: state.profile.isUserFollowUploadFail,
		isProfileUserUploading: state.profile.isProfileUserUploading,
		isProfileUserUploadFail: state.profile.isProfileUserUploadFail,
		isUserStatusUploading: state.profile.isUserStatusUploading,
		isUserStatusUploadFail: state.profile.isUserStatusUploadFail,
});

const actionCreators = {
	updateProfileData,
	getUserProfile,
	getUserStatus,
	updateStatus,
	sendPost,
	updateAvatar,
	getIsUserFollowed,
	followUser, 
	unfollowUser
}

export default compose(connect<TStateProps, TDispatchProps, {}, stateType>(mapStateToProps, actionCreators), withRouter)(ProfileContainer);