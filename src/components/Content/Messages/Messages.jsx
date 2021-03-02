import React from 'react';
import { Redirect } from 'react-router-dom';
import DeployMessageContainer from './DeployMessage/DeployMessageContainer';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.css';

const Messages = ({store}) => {
	if(store.getState().auth.resultCode) return <Redirect to='/login'/>
	
	return (
		
		<div className={wrapper}>
			<Dialogs dialogsData={store.getState().messages.dialogsData} />
			<DeployMessageContainer/>
		</div>
	)
}

export default Messages;