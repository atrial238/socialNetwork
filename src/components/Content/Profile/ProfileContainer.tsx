import React, { useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";

import HeaderProfile from './HeaderProfile/HeaderProfile';
import BodyProfile from './BodyProfile/BodyProfile';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import { updateProfileData, getUserProfile, getUserStatus, getIsUserFollowed,
	updateStatus, sendPost, updateAvatar, followUser, unfollowUser } from '../../../redux/profile-reducer';
import { stateType } from '../../../redux/store';
import { PropsTypes, TDispatchProps, TStateProps } from './types/ProfileConatainerTypes';

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