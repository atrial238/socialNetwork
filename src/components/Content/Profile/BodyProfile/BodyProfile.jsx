import React from 'react';
import {wrapper, content} from './BodyProfile.module.scss';
import UserData from './UserData/UserData';
import Posts from './Posts/Posts';

const BodyProfile = (props) => {
	const {aboutMe, isOwner, contacts, lookingForAJobDescription, ...rest} = props;
	const data = {aboutMe, isOwner, contacts, lookingForAJobDescription}
	return (
		<div className={wrapper}>
			<div className={content}>
				<UserData {...data}/>
				<Posts/>
			</div>
		</div>
	)
}

export default BodyProfile;