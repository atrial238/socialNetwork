import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import {form} from './Posts.module.css';
import {renderField, required} from '../../../common/util/validateInput';

const FormPost = ({handleSubmit})=> {
	return (
		<form className={form} onSubmit={handleSubmit}>
			<Field 
				type='text'
				name='post' 
				lable='textarea'
				component={renderField} 
				validate={[required]}
				placeholder='your news...' 
				style={{marginRight: '15px', width: '500px', height: '50px', borderRadius: '7px'}}/>
			<button  type='submit' >send</button>
		</form>
	)
}
const FormPostWithReduxForm = reduxForm({form: 'post'})(FormPost);

const Posts = ({postData, postMesssgeActioncreator}) => {
	
	const postElement = postData.map( post => <Post key={post.id} text={post.text} like={post.like}/> );
	const onSubmit = (postData) => {
		postMesssgeActioncreator(postData.post)
	}
	return (
		<div >
			<h2>My posts</h2>
			<FormPostWithReduxForm onSubmit={onSubmit}/>
			{postElement}
		</div>
	)
}
export default Posts;