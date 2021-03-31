import React, {useEffect, useState} from 'react';
import { wrapper } from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';
import { withRouter, useParams} from 'react-router-dom';

const DeployDialogs = ({ messages, sendMessage, dialogs, getPenPals, match}) => {
	const fakePenPal = [16178, 15455, 15349, 15293];
	const {userId} = useParams();
	// const [isLoadingPenPal, setLoadingPenPal] = useState(false);

	useEffect(()=> {
		if(!dialogs.length){
			getPenPals(fakePenPal)
			.then((res) => {
				if(res){
					// setLoadingPenPal(true)
				}
			})
		}
		
	}, [userId])

	
		
		const user = dialogs.find(user => {
			return user.id === +userId ? user : null;
			})
		
	

	let arrMessagesElements;
	if(user){
		arrMessagesElements = user.messages.map(elem => elem.penPal ? elem.penPal.map((message, index) => <OneMessage key={index} text={message}/>) 
																						: elem.authUser.map((message, index) => <OneMessage key={index} text={message}/>)  );

	}
		
	return (
		<div className={wrapper}>
			<div>
				{arrMessagesElements}
			</div>
			<FormMessage sendMessage={sendMessage}/>
		</div>
	)
}

export default DeployDialogs;

