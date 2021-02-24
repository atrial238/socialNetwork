import React from 'react';
import { changeGlobalStateMessageActionCreator, sendMessageActionCreator } from '../../../../redux/message-reducer';
import { wrapper, form, column, textarea } from './DeployMessage.module.css';
import OneMessage from './OneMessage/OneMessage';

const DeployMessage = ({ temporaryMessage, arrMessages, dispatch}) => {

	const arrMessagesElements =arrMessages.map(message => <OneMessage text={message.text} pathImg={message.pathImg} />);
	const refTextarea = React.createRef();
	
	const sendMessage = () => dispatch(sendMessageActionCreator());
	const changeGlobalStateMessage = (e) => dispatch(changeGlobalStateMessageActionCreator(e.target.value));

	return (
		<div className={wrapper}>
			<div className={column}>
				{arrMessagesElements}
			</div>
			<div className={form + ' ' + column}>
				<textarea className={textarea}  onChange={changeGlobalStateMessage} value={temporaryMessage}></textarea>
				<button  onClick={sendMessage}>send</button>
			</div>
		</div>
	)
}

export default DeployMessage;
