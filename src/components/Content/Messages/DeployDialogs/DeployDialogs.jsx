import React, {useEffect, useState} from 'react';
import { wrapper } from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';
import { useParams} from 'react-router-dom';

const DeployDialogs = ({sendMessage, dialogs, getPenPals, authUserAvatar}) => {
	const {userId} = useParams();

	

		const penPal = dialogs.find(user => {
			return user.id === +userId ? user : null;
			})
		
	let arrMessagesElements;
	if(penPal){
		arrMessagesElements = 
		penPal.messages.map(elem => elem.penPal ? elem.penPal.map((message, index) => <OneMessage key={index} text={message} pathImg={penPal.avatar} isAuthUser={false}/>) 
															: elem.authUser.map((message, index) => <OneMessage key={index} text={message} pathImg={authUserAvatar} isAuthUser={true}/>)  );

	}
		
	return (
		<div className={wrapper}>
			<div>
				{arrMessagesElements}
			</div>
			<FormMessage sendMessage={sendMessage} penPalId={penPal && penPal.id}/>
		</div>
	)
}

export default DeployDialogs;

