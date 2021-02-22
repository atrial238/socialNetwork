import React from 'react';
import Post from './Post/Post';
import {form} from './Posts.module.css';

const Posts = ({profile, addPost, changeStateWhenTextareaInput}) => {
	
	const postElement = profile.postData.map( post => <Post text={post.text} like={post.like}/> );
	const refTextatea = React.createRef();

	const postMessage = () => addPost();

	const changeStateFromInput = () => changeStateWhenTextareaInput(refTextatea.current.value);

	return (
		<div >
			<h2>My posts</h2>
			<div className={form}>
				<textarea value={profile.temporaryValue} placeholder='your news...' ref={refTextatea} onChange={changeStateFromInput}></textarea>
				<button  onClick={postMessage} >send</button>
			</div>
			{postElement}
		</div>
	)
}
export default Posts;