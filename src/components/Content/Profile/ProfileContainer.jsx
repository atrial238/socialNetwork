import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import BodyProfile from './BodyProfile/BodyProfile';
import { updateProfileData, getUserProfile, getUserStatus, 
	updateStatus, sendPost, updateAvatar } from '../../../redux/profile-reducer';

const ProfileContainer = props => {

	useEffect(() => {
		const userIdFromUrl = props.match.params.userId,
				userIdFromAuthData = props.authData.id;

		if (!userIdFromUrl && !userIdFromAuthData) props.history.push('/login')
			props.getUserProfile(userIdFromUrl || userIdFromAuthData);
			props.getUserStatus(userIdFromUrl || userIdFromAuthData);

	}, [props.match.params.userId]);

	const isOwner = props.match.params.userId === undefined;

	const { profileUserData,
		userStatus,
		updateStatus,
		postData,
		sendPost,
		updateAvatar,
		updateProfileData,
		isAvatarUploading,
		isErrorUpdateAvatar,} = props;

	const data = {
		profileUserData,
		userStatus,
		updateStatus,
		updateAvatar,
		updateProfileData,
		isOwner
	};

	const headerProfileData = {
		updateAvatar, 
		avatar: profileUserData.photos.large,
		isOwner,
		isAvatarUploading,
		isErrorUpdateAvatar,
		nameUser: profileUserData.fullName,
		userStatus,
		updateStatus,
	}

	const bodyProfileData = {...profileUserData, isOwner, updateProfileData, postData, sendPost};

	return (
			<>
				<HeaderProfile {...headerProfileData} />
				<BodyProfile {...bodyProfileData}/>
			</>
	)
}

const mapStateToProps = state => ({
		profileUserData: state.profile.profileUserData,
		userStatus: state.profile.userStatus,
		authData: { id: state.auth.id, isAuth: state.auth.isAuth },
		postData: state.profile.postData,
		isAvatarUploading: state.profile.isAvatarUploading,
		isErrorUpdateAvatar: state.profile.isErrorUpdateAvatar
});

const actionCreators = {
	updateProfileData,
	getUserProfile,
	getUserStatus,
	updateStatus,
	sendPost,
	updateAvatar
}

export default compose(
	connect(mapStateToProps, actionCreators),
	withRouter,
)(ProfileContainer);

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