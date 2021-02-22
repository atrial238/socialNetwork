import React from 'react';
import DeployMessage from './DeployMessage/DeployMessage';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.css';

const Messages = ({messages, changeStateWhenMessageTyping, addMessage}) => {

	return (
		<div className={wrapper}>
			<Dialogs dialogsData={messages.dialogsData} />
			<DeployMessage 
				arrMessages={messages.arrMessages}
				temporaryMessage={messages.temporaryMessage}
				changeStateWhenMessageTyping ={changeStateWhenMessageTyping}
				addMessage={addMessage}
			/>
		</div>
	)
}

export default Messages;