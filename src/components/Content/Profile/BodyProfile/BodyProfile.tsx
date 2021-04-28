import React from 'react';
import styles from './BodyProfile.module.scss';
import UserData from './UserData/UserData';
import Posts from './Posts/Posts';
import ErrorBoundary from '../../../common/ErrorBoundary/ErrorBoundary';
import { contactsType, postDataType, profileDataType, sendPostType } from '../../../../redux/types/profile-reducer-types';

const {wrapper, content} = styles;

interface PropsBodyProfileType {
	aboutMe: string 
	isOwner: boolean
	contacts: contactsType
	lookingForAJobDescription: string
	isProfileUserUploading: boolean
	updateProfileData: (data: profileDataType) => (dispatch: any, getState: any) => Promise<object>
	fullName: string
	photos: {large: string, small: string}
	postData: Array<postDataType> 
	sendPost: (post: string) => sendPostType
}
const BodyProfile: React.FC<PropsBodyProfileType> = (props) => {

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