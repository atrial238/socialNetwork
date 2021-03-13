import React from 'react';
import { wrapper, column } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';
import FormMessageWithFormRedux from './FormMessage/FormMessage';


const DeployMessage = ({ messages, sendMessageActionCreator }) => {
	
	const arrMessagesElements = messages.map(message => <OneMessage key={message.id} text={message.text} pathImg={message.pathImg} />);
	
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

