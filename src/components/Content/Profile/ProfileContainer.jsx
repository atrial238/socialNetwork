import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Posts from './Posts/Posts';
import DataUser from './DataUser/DataUser';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import { updateProfileData, getUserProfile, getUserStatus, 
				updateStatus, sendMessage, updateAvatar } from '../../../redux/profile-reducer'
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import BodyProfile from './BodyProfile/BodyProfile';

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
		isErrorUpdateAvatar,
		isUserDataUpload,
		isErrorUploadUserData} = props;

	const data = {
		profileUserData,
		userStatus,
		updateStatus,
		updateAvatar,
		updateProfileData,
		isOwner
	};
	
	const {fullName, photos, ...rest} = profileUserData;

	const bodyProfileData = {...rest, isOwner, updateProfileData, fullName, isUserDataUpload, isErrorUploadUserData};

	const headerProfileData = {
		updateAvatar, 
		avatar: photos.large,
		isOwner,
		isAvatarUploading,
		isErrorUpdateAvatar,
		nameUser: fullName,
		userStatus,
		updateStatus,
	}
	
	return (
		<>
			<HeaderProfile {...headerProfileData} />
			<BodyProfile {...bodyProfileData}/>
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
		isErrorUpdateAvatar: state.profile.isErrorUpdateAvatar,
		isUserDataUpload: state.profile.isUserDataUpload,
		isErrorUploadUserData: state.profile.isErrorUploadUserData
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
	isErrorUploadUserData: PropTypes.bool,
	isUserDataUpload: PropTypes.bool,
	updateProfileData: PropTypes.func,
	getUserProfile: PropTypes.func,
	getUserStatus: PropTypes.func,
	updateStatus: PropTypes.func,
	sendMessage: PropTypes.func,
	updateAvatar: PropTypes.func,
}