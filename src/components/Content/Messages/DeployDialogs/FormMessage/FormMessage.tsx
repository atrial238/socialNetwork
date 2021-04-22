import React from 'react';
import styles from '../DeployDialogs.module.scss';
import {required} from '../../../../../util/validateForm';
import { Formik, Field, Form } from 'formik';
import { TextareaAutosize } from '@material-ui/core';
import sendImg from '../../../../../assets/images/message/send.svg';
import { addMessageType } from '../../../../../redux/types/message-reducer-types';

const { form_wrapper} = styles;

interface Props {
	sendMessage: (message: string, penPalId: any) => addMessageType
	penPalId: number | undefined
}

const FormMessage: React.FC<Props> = ({sendMessage, penPalId}) => {

	return (
		<Formik
			initialValues={{message: ''}}
			onSubmit={(values, {resetForm}) =>{
				sendMessage(values.message, penPalId);
				resetForm()
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