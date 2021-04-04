import React from 'react';
import {wrapper} from './Posts.module.scss';
import HeaderPost from './HeaderPost/HeaderPost';
import Post from './Post/Post';


const Posts = ({photo, postData, sendPost, fullName, isOwner, isProfileUserUploading}) => {

	const onSubmit = data => sendPost(data.post);

	const formPostData = {onSubmit, photo, sendPost};

	const postElement = postData.map((post, index) => 
								<Post 
									key={index} 
									text={post.text} 
									like={post.like} 
									fullName={fullName} 
									isProfileUserUploading={isProfileUserUploading}
									photo={photo} date={post.date}
								 />);

	return isOwner ?  <div className={wrapper} >
								<HeaderPost {...formPostData} />
								{postElement}
							</div>
						: <div className={wrapper} >User don't have a wall</div>
	
}

export default Posts;