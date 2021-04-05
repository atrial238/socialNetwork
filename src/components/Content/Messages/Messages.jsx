import React, {useEffect, useState} from 'react';
import DeployDialogs from './DeployDialogs/DeployDialogs';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.scss';
import {Route} from 'react-router-dom';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';

const Messages = ({messages, dialogs, sendMessage, getPenPals, authUserAvatar}) => {

	const [isPenPalLoading, setPenPalLoading] = useState(false);
	const [isPenPalLoadingFail, setIsPenPalLoadingFail] = useState(false);

	const fakePenPal = [16178, 15455, 15349, 15293];

	useEffect(()=> {
		if(!dialogs.length){
			setPenPalLoading(true)
			setIsPenPalLoadingFail(false)
			getPenPals(fakePenPal)
				.then(res => res && setPenPalLoading(false))
				.catch(()=>{
					setPenPalLoading(false)
					setIsPenPalLoadingFail(true)
				} )
		}
	}, [...fakePenPal])

	const dataDeployDialogs = {messages, sendMessage, dialogs, getPenPals, authUserAvatar};
	const dataDialogs = {dialogs, isPenPalLoading, isPenPalLoadingFail}

	return (
		<div className={wrapper}>

			<ErrorBoundary>
				<Dialogs {...dataDialogs}/>
			</ErrorBoundary>
			
			<ErrorBoundary>
				<Route path='/messages/:userId?' children={<DeployDialogs {...dataDeployDialogs} />} />
			</ErrorBoundary>
			
		</div>
	)
}

export default Messages;