import React from 'react';
import { wrapper, form, column, textarea } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';

const DeployMessage = ({ temporaryMessage, arrMessages, sendMessage, changeGlobalStateMessage}) => {

	const arrMessagesElements = arrMessages.map(message => <OneMessage text={message.text} pathImg={message.pathImg} />);

	return (
		<div className={wrapper}>
			<div className={column}>
				{arrMessagesElements}
			</div>
			<div className={form + ' ' + column}>
				<textarea className={textarea}  onChange={(e) => changeGlobalStateMessage(e.target.value)} value={temporaryMessage}></textarea>
				<button  onClick={sendMessage}>send</button>
			</div>
		</div>
	)
}

export default DeployMessage;
