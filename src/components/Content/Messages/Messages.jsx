import React, {useEffect} from 'react';
import DeployDialogs from './DeployDialogs/DeployDialogs';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.scss';
import {Switch, Route} from 'react-router-dom';

const Messages = ({messages, dialogs, sendMessage, getPenPals, authUserAvatar}) => {

	
	

	

	const data = {messages, sendMessage, dialogs, getPenPals, authUserAvatar};
	return (
		<div className={wrapper}>
			<Dialogs dialogs={dialogs}  />
			<Switch>
				<Route path='/messages/:userId?' children={<DeployDialogs {...data} />} />
			</Switch>
		</div>
	)
}

export default Messages;