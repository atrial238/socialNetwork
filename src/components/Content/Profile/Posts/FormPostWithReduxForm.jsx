import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import {form} from './Posts.module.css';
import {renderField, required} from '../../../common/util/rederFormField';

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
export default reduxForm({form: 'post'})(FormPost);