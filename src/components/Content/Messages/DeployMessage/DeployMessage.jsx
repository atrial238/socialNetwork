import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { wrapper, formClass, column, textarea } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';
import {renderField} from '../../../common/validate/validateInput';

const FormMessage = ({handleSubmit}) => {
	return (
		<form  className={formClass + ' ' + column} onSubmit={handleSubmit}>
			<Field className={textarea} type='text' name='message' component={renderField}/>
			<button type='submit'>send</button>
		</form>
	)
}
const FormMessageWithFormRedux = reduxForm({form: 'messages'})(FormMessage);

const DeployMessage = ({ arrMessages, sendMessageActionCreator }) => {

	const arrMessagesElements = arrMessages.map(message => <OneMessage key={message.id} text={message.text} pathImg={message.pathImg} />);
	
	const onSubmit = (data) => sendMessageActionCreator(data.message);

	return (
		<div className={wrapper}>
			<div className={column}>
				{arrMessagesElements}
			</div>
			<FormMessageWithFormRedux onSubmit={onSubmit}/>
		</div>
	)
}

export default DeployMessage;

