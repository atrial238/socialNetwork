import React from 'react';
import DeployMessageContainer from './DeployMessage/DeployMessageContainer';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.css';

const Messages = ({store, dispatch}) => {

	return (
		<div className={wrapper}>
			<Dialogs dialogsData={store.getState().messages.dialogsData} />
			<DeployMessageContainer/>
		</div>
	)
}

export default Messages;