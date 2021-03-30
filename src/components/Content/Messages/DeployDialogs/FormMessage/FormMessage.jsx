import React from 'react';
import { form_wrapper} from '../DeployDialogs.module.scss';
import {required} from '../../../../../util/validateForm';
import { Formik, Field, Form } from 'formik';
import { TextareaAutosize } from '@material-ui/core';
import sendImg from '../../../../../assets/images/message/send.svg';

const FormMessage = ({sendMessage}) => {

	return (
		<Formik
			initialValues={{message: ''}}
			onSubmit={(values, {resetForm}) =>{
				sendMessage(values.message);
				resetForm({message: ''})
			}}
	>
		{({handleSubmit, errors, handleChange, values, touched})=>(
			<Form onSubmit={handleSubmit} className={form_wrapper}>
				<Field
					as={TextareaAutosize} 
					type="text"
					onChange={handleChange}
					value={values.message}
					name="message"
					validate={required}
					placeholder={errors.message && touched.message ? 'write something here' : ''}
				/>
				<button type="submit"><img src={sendImg} alt=""/></button>
			 </Form>
		)}
    </Formik>
	)
}
export default FormMessage;