import React from 'react';
import Posts from './Posts/Posts';
import MyData from './MyData/MyData';
import style from './Profile.module.css';
import Cover from './Cover/Cover';

const Profile = ({profile, dispatch}) => {
	return (
		<div>
			<Cover/>
			<MyData/>
			<Posts 
				profile={profile}
				dispatch={dispatch}
			/>
		 </div>

	)
}
export default Profile;
