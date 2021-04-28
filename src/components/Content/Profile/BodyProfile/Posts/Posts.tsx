import React from 'react';
import styles from './Posts.module.scss';
import HeaderPost from './HeaderPost/HeaderPost';
import Post from './Post/Post';
import { postDataType, sendPostType } from '../../../../../redux/types/profile-reducer-types';

const {wrapper} = styles;

interface PropsPosts {
	photo: string
	postData: Array<postDataType>
	sendPost: (post: string) => sendPostType
	fullName: string
	isOwner: boolean
	isProfileUserUploading: boolean
}

const Posts: React.FC<PropsPosts> = ({photo, postData, sendPost, fullName, isOwner, isProfileUserUploading}) => {

	const formPostData = {photo, sendPost};

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