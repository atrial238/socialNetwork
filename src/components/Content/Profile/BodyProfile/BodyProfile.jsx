import React from 'react';
import {wrapper, content} from './BodyProfile.module.scss';
import UserData from './UserData/UserData';
import Posts from './Posts/Posts';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';

const BodyProfile = (props) => {

	const {aboutMe, isOwner, contacts, lookingForAJobDescription,isProfileUserUploading, 
					updateProfileData, fullName, photos, postData, sendPost} = props;

	const data = {aboutMe, isOwner, contacts, lookingForAJobDescription, updateProfileData, fullName};
	const postsData = {photo: photos.small, postData, sendPost, fullName, isOwner, isProfileUserUploading};

	return (
		<div className={wrapper}>
			<div className={content}>
				<ErrorBoundary>
					<UserData {...data}/>
					<Posts {...postsData}/>
				</ErrorBoundary>
			</div>
		</div>
	)
}

export default BodyProfile;