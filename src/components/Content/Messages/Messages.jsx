import React from 'react';
import DeployMessage from './DeployMessage/DeployMessage';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.css';
						
const Messages = ({messages, sendMessage, changeGlobalStateMessage}) => {
	
	const {arrMessages, temporaryMessage, dialogsData} = messages;
	const data = {arrMessages, temporaryMessage, sendMessage, changeGlobalStateMessage}
	return (
		
		<div className={wrapper}>
			<Dialogs dialogsData={dialogsData} />
			<DeployMessage {...data} />
		</div>
	)
}

export default Messages;