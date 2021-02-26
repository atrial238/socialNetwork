import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import MyData from './MyData/MyData';
import style from './Profile.module.css';
import Cover from './Cover/Cover';

const Profile = () => {
	return (
		<div>
			<Cover/>
			<MyData/>
			<PostsContainer/>
		 </div>

	)
}
export default Profile;
