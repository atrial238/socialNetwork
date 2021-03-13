import React from 'react'; 
import Post from './Post/Post';
import FormPostWithReduxForm from './FormPostWithReduxForm';

const Posts = ({postData, postMesssgeActioncreator}) => {
	
	const onSubmit = (postData) => {
		postMesssgeActioncreator(postData.post)
	}
	const postElement = postData.map( post => <Post key={post.id} text={post.text} like={post.like}/> );
	return (
		<div >
			<h2>My posts</h2>
			<FormPostWithReduxForm onSubmit={onSubmit}/>
			{postElement}
		</div>
	)
}
export default Posts;