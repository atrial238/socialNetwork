import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Posts from './Posts/Posts';
import DataUser from './DataUser/DataUser';
import Cover from './Cover/Cover';
import { updateProfileData, getUserProfile, getUserStatus, updateStatus, sendMessage, updateAvatar } from '../../../redux/profile-reducer'
import WithAuthRedirect from '../../../hoc/withAuthRedirect';

const ProfileContainer = props => {

	useEffect(() => {
		const userIdFromUrl = props.match.params.userId,
				userIdromAuthData = props.authData.id;
		if (!userIdFromUrl && !userIdromAuthData) props.history.push('/login')
		props.getUserProfile(userIdFromUrl || userIdromAuthData);
		props.getUserStatus(userIdFromUrl || userIdromAuthData);

	}, [props.match.params.userId]);

	const isOwner = props.match.params.userId === undefined;

	const { profileUserData,
		userStatus,
		updateStatus,
		postData,
		sendMessage,
		updateAvatar,
		updateProfileData,
		isAvatarUploading,
		isErrorUpdateAvatar} = props;

	const data = {
		profileUserData,
		userStatus,
		updateStatus,
		updateAvatar,
		updateProfileData,
		isOwner
	};
	
	const dataAvatar = {
		updateAvatar, 
		avatar: profileUserData && profileUserData.photos.large,
		isOwner,
		isAvatarUploading,
		isErrorUpdateAvatar
	}

	return (
		<>
			<Cover {...dataAvatar} />
			<DataUser {...data} />
			<Posts postData={postData} sendMessage={sendMessage} />
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
	sendMessage,
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
	sendMessage: PropTypes.func,
	updateAvatar: PropTypes.func,
}