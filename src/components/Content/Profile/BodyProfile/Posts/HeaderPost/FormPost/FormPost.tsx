import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {RenderField} from '../../../../../../../util/renderFormField';
import {required} from '../../../../../../../util/validateForm';
import { HandleCloseType } from '../HeaderPost';
import styles from '../HeaderPost.module.scss';

const {form, send_btn, cancel_btn, button, btn_wrapper, field_wrapper} = styles;

interface IPropsFieldName {
	post: string
}

const FormPost: React.FC<InjectedFormProps<IPropsFieldName, HandleCloseType> & HandleCloseType> = ({handleSubmit, handleClose})=> {
	return (
		<form  className={form} onSubmit={handleSubmit} tabIndex={-1}>
			<div className={field_wrapper}>
				<Field
					type='text'
					name='post'
					typeTag='textarea'
					component={RenderField}
					validate={[required]}
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
export default reduxForm<IPropsFieldName, HandleCloseType>({form: 'post'})(FormPost);
