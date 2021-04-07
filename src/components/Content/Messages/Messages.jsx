import React, {useEffect, useState} from 'react';
import DeployDialogs from './DeployDialogs/DeployDialogs';
import Dialogs from './Dialogs/Dialogs';
import {wrapper} from './Messages.module.scss';
import {Route, Switch} from 'react-router-dom';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';

const Messages = ({messages, dialogs, sendMessage, getPenPals, authUserAvatar}) => {

	const fakePenPal = [16178, 15455, 15349, 15293];

	const [isPenPalLoading, setPenPalLoading] = useState(false);
	const [isPenPalLoadingFail, setIsPenPalLoadingFail] = useState(false);
	const [isMobaleView, setIsMobaleView] = useState(window.matchMedia('(max-width: 770px)'));

	const updateWidth = () => setIsMobaleView(window.matchMedia('(max-width: 770px)'));

	useEffect(()=>{
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	})
	
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

	const propsDeployDialogs = {messages, sendMessage, dialogs, getPenPals, authUserAvatar};
	const propsDialogs = {dialogs, isPenPalLoading, isPenPalLoadingFail}

	return (
		
		<div className={wrapper}>
			{isMobaleView.matches 
									? <ErrorBoundary>
											<Switch>
												<Route exact path='/messages/' children={<Dialogs {...propsDialogs}/>} />
												<Route exact path='/messages/:userId?' children={<DeployDialogs {...propsDeployDialogs} isMobaleView={isMobaleView} />} />
											</Switch>
										</ErrorBoundary>
									: <>
										<ErrorBoundary><Dialogs {...propsDialogs}/></ErrorBoundary>
										<ErrorBoundary>
											<Route path='/messages/:userId?' children={<DeployDialogs {...propsDeployDialogs} />} />
										</ErrorBoundary>
			</>}
			
			
		</div>
	)
}

export default Messages;