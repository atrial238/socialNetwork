import React from 'react';
import { wrapper } from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';
import { useParams} from 'react-router-dom';

const DeployDialogs = ({sendMessage, dialogs, authUserAvatar}) => {

// get pan pal id from url
	const {userId} = useParams();

// find needed pan pal in array with all pan pals - dialogs
	const penPal = dialogs.find(user => user.id === +userId ? user : null);
		

// in state every pan pals have messages array containing objects, but it's not from server
// like this messages = [ {authUser: [someMessage1, someMessage2, ...]}, {panPal: [someMessage1, someMessage2, ...]}, ....] 
	let arrMessagesElements;

	if(penPal){
		arrMessagesElements = penPal.messages.map(elem => 
			elem.penPal 
				? elem.penPal.map((message, index) =>
					<OneMessage key={index} text={message} pathImg={penPal.avatar}  id={penPal.id} isAuthUser={false}/>) 
				: elem.authUser.map((message, index) => 
					<OneMessage key={index} text={message} pathImg={authUserAvatar} id={''}  isAuthUser={true}/>)  );
	}
		
	return (
		<div className={wrapper}>
			<div>
				{arrMessagesElements ? arrMessagesElements : <div>Сhoose a user with whom you will correspond</div>}
			</div>
			{arrMessagesElements && <FormMessage sendMessage={sendMessage} penPalId={penPal && penPal.id}/>}
		</div>
	)
}

export default DeployDialogs;

