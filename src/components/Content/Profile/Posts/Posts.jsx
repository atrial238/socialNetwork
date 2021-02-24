import React from 'react';
import { changeGlobalStatePostActionCreator, postMesssgeActioncreator } from '../../../../redux/profile-reducer';
import Post from './Post/Post';
import {form} from './Posts.module.css';

const Posts = ({profile, dispatch}) => {
	
	const postElement = profile.postData.map( post => <Post text={post.text} like={post.like}/> );
	
	const postMessage = () => dispatch(postMesssgeActioncreator());

	const changeClobalStatePost = (e) => dispatch(changeGlobalStatePostActionCreator(e.target.value));
	
	return (
		<div >
			<h2>My posts</h2>
			<div className={form}>
				<textarea value={profile.temporaryValue} placeholder='your news...'  onChange={changeClobalStatePost}></textarea>
				<button  onClick={postMessage} >send</button>
			</div>
			{postElement}
		</div>
	)
}
export default Posts;