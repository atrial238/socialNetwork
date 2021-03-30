import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField} from '../../../../../../../util/renderFormField';
import {required, maxLength100} from '../../../../../../../util/validateForm';
import {form, send_btn, cancel_btn, button, btn_wrapper, field_wrapper} from '../HeaderPost.module.scss';

const FormPost = ({handleSubmit, handleClose})=> {

	return (
		<form  className={form} onSubmit={handleSubmit}>
			<div className={field_wrapper}>
				<Field
					type='text'
					name='post'
					typeTag='textarea'
					component={renderField}
					validate={[required, maxLength100]}
					errorMessage='Write something here...'
				/>
			</div>
			<div className={btn_wrapper}>
				<div className={button}>
					<label htmlFor="send_btn"></label>
					<button id='send_btn' type='submit' className={send_btn}>Post</button>
				</div>
				<div className={button}>
					<label htmlFor="cancel_btn"></label>
					<button id='cancel_btn'type='button' className={cancel_btn} onClick={handleClose}>Cancel</button>
				</div>
			</div>
		</form>
	)
}
export default reduxForm({form: 'post'})(FormPost);
