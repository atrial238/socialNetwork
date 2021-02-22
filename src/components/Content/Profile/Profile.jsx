import React from 'react';
import Posts from './Posts/Posts';
import MyData from './MyData/MyData';
import style from './Profile.module.css';
import Cover from './Cover/Cover';

const Profile = ({profile, state}) => {
	return (
		<div>
			<Cover/>
			<MyData/>
			<Posts 
				profile={profile}
				state={state}
			/>
		 </div>

	)
}
export default Profile;
