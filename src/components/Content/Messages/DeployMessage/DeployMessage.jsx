import React from 'react';
import { wrapper, form, column, textarea } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';

const DeployMessage = ({ temporaryMessage, arrMessages, changeStateWhenMessageTyping, 	addMessage}) => {

	const arrMessagesElements =arrMessages.map(message => <OneMessage text={message.text} pathImg={message.pathImg} />);
	const refTextarea = React.createRef();
	const sendMessage = () => addMessage();
	const changeGlobalState = () => changeStateWhenMessageTyping(refTextarea.current.value);
	return (
		<div className={wrapper}>
			<div className={column}>
				{arrMessagesElements}
			</div>
			<div className={form + ' ' + column}>
				<textarea className={textarea} ref={refTextarea} onChange={changeGlobalState} value={temporaryMessage}></textarea>
				<button  onClick={sendMessage}>send</button>
			</div>
		</div>
	)
}

export default DeployMessage;