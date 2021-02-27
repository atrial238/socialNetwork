import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import MyDataContainer from './MyDataContainer/MyDataContainer';
import Cover from './Cover/Cover';

const Profile = () => {
	return (
		<div>
			<Cover/>
			<MyDataContainer/>
			<PostsContainer/>
		 </div>

	)
}
export default Profile;
