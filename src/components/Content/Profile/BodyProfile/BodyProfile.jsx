import React from 'react';
import {wrapper, content} from './BodyProfile.module.scss';
import UserData from './UserData/UserData';
import Posts from './Posts/Posts';

const BodyProfile = (props) => {

	const {aboutMe, isOwner, contacts, lookingForAJobDescription, updateProfileData, fullName, photos, postData, sendPost} = props;
	const data = {aboutMe, isOwner, contacts, lookingForAJobDescription, updateProfileData, fullName};
	const postsData = {photo: photos.small, postData, sendPost};

	return (
		<div className={wrapper}>
			<div className={content}>
				<UserData {...data}/>
				<Posts {...postsData}/>
			</div>
		</div>
	)
}

export default BodyProfile;