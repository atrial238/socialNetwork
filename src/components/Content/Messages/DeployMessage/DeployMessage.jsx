import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { wrapper, formClass, column, textarea } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';
import {renderField, required, maxLength15} from '../../../common/util/validateInput';



const FormMessage = ({handleSubmit}) => {

	return (
		<form  className={formClass + ' ' + column} onSubmit={handleSubmit}>
			<Field className={textarea} type='text' name='message' lable='textarea' component={renderField} validate={[required, maxLength15]}/>
			<button type='submit'>send</button>
		</form>
	)
}
const FormMessageWithFormRedux = reduxForm({form: 'messages'})(FormMessage);

const DeployMessage = ({ arrMessages, sendMessageActionCreator }) => {

	const arrMessagesElements = arrMessages.map(message => <OneMessage key={message.id} text={message.text} pathImg={message.pathImg} />);
	
	const onSubmit = (data) => {
		sendMessageActionCreator(data.message)
	};

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

