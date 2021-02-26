import React from 'react'; 
import Post from './Post/Post';
import {form} from './Posts.module.css';

const Posts = ({postData, temporaryValue, postMessage, changeClobalStatePost}) => {
	
	const postElement = postData.map( post => <Post key={post.id} text={post.text} like={post.like}/> );
	
	return (
		<div >
			<h2>My posts</h2>
			<div className={form}>
				<textarea value={temporaryValue} placeholder='your news...' onChange={(e) => changeClobalStatePost(e.target.value)}></textarea>
				<button  onClick={postMessage} >send</button>
			</div>
			{postElement}
		</div>
	)
}
export default Posts;