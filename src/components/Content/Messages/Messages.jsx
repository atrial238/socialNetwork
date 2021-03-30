import React from 'react';
import DeployDialogs from './DeployDialogs/DeployDialogs';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.scss';

const Messages = ({messages, dialogs, sendMessage}) => {
	
	const data = {messages, sendMessage}
	return (
		
		<div className={wrapper}>
			<Dialogs dialogs={dialogs} />
			<DeployDialogs {...data} />
		</div>
	)
}

export default Messages;