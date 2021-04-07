import React from 'react';
import { useParams, Redirect, withRouter} from 'react-router-dom';
import { wrapper, back, wrapper_message} from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';
import backIcons from '../../../../assets/images/message/back.svg';

const DeployDialogs = ({sendMessage, dialogs, authUserAvatar, isMobaleView, history}) => {

// get pan pal id from url
	const {userId} = useParams();

// find needed pan pal in array with all pan pals - dialogs
	const penPal = dialogs.find(user => user.id === +userId ? user : null);
		

// in state every pan pals have messages array containing objects, but it's not from server
// like this: messages = [ {authUser: [someMessage1, someMessage2, ...]}, {panPal: [someMessage1, someMessage2, ...]}, ....] 
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
				{isMobaleView && <div className={back} onClick={()=> history.push('/messages')}><div><img src={backIcons} alt='back'/></div></div>}
				{arrMessagesElements ? <div className={wrapper_message}>{arrMessagesElements}</div> : <div style={{padding: '10px'}}>Сhoose a user with whom you will correspond</div>}
			</div>
			{arrMessagesElements && <FormMessage sendMessage={sendMessage} penPalId={penPal && penPal.id}/>}
		</div>
	)
}

export default withRouter(DeployDialogs);

