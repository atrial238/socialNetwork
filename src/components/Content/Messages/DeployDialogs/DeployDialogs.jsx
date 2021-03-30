import React from 'react';
import { wrapper } from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';


const DeployDialogs = ({ messages, sendMessage }) => {
	
	const arrMessagesElements = messages.map(message => <OneMessage key={message.id} text={message.text}/>);
	
	

	return (
		<div className={wrapper}>
			<div>
				{arrMessagesElements}
			</div>
			<FormMessage sendMessage={sendMessage}/>
		</div>
	)
}

export default DeployDialogs;

