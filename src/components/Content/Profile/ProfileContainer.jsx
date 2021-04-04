import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import BodyProfile from './BodyProfile/BodyProfile';
import { updateProfileData, getUserProfile, getUserStatus, getIsUserFollowed,
	updateStatus, sendPost, updateAvatar, followUser, unfollowUser } from '../../../redux/profile-reducer';

const ProfileContainer = props => {

// get profile user from server or redirect to login page
	useEffect(() => {
		const userIdFromUrl = props.match.params.userId,
				userIdFromAuthData = props.authData.id;

		if (!userIdFromUrl && !userIdFromAuthData) props.history.push('/login')
			props.getUserProfile(userIdFromUrl || userIdFromAuthData);
			props.getUserStatus(userIdFromUrl || userIdFromAuthData);
			userIdFromUrl && props.getIsUserFollowed(userIdFromUrl);

	}, [props.match.params.userId]);

// splitting props
	const isOwner = props.match.params.userId === undefined;

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
				isUserFollowUploadFail} = props;

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
			isUserFollowUploadFail
	}

	const bodyProfileProps = {...profileUserData, isOwner, updateProfileData, postData, sendPost};

	return (
			<>
				<HeaderProfile {...headerProfileProps} />
				<BodyProfile {...bodyProfileProps}/>
			</>
	)
}

const mapStateToProps = state => ({
		profileUserData: state.profile.profileUserData,
		userStatus: state.profile.userStatus,
		authData: { id: state.auth.id, isAuth: state.auth.isAuth },
		postData: state.profile.postData,
		isAvatarUploading: state.profile.isAvatarUploading,
		isErrorUpdateAvatar: state.profile.isErrorUpdateAvatar,
		isUserFollow: state.profile.isUserFollow,
		isUserFollowUploading: state.profile.isUserFollowUploading,
		isUserFollowUploadFail: state.profile.isUserFollowUploadFail

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

export default compose(connect(mapStateToProps, actionCreators), withRouter)(ProfileContainer);

ProfileContainer.propTypes = {
	profileUserData: PropTypes.object,
	userStatus: PropTypes.string,
	authData: PropTypes.object,
	postData: PropTypes.array,
	isAvatarUploading: PropTypes.bool,
	isErrorUpdateAvatar: PropTypes.bool,
	updateProfileData: PropTypes.func,
	getUserProfile: PropTypes.func,
	getUserStatus: PropTypes.func,
	updateStatus: PropTypes.func,
	sendPost: PropTypes.func,
	updateAvatar: PropTypes.func,
}