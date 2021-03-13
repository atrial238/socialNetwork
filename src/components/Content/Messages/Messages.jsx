import React from 'react';
import DeployMessage from './DeployMessage/DeployMessage';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.css';
						
const Messages = ({messages, dialogs, sendMessageActionCreator}) => {
	
	const data = {messages, sendMessageActionCreator}
	return (
		
		<div className={wrapper}>
			<Dialogs dialogs={dialogs} />
			<DeployMessage {...data} />
		</div>
	)
}

export default Messages;