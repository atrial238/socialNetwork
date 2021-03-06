import React from 'react';
import { useParams, useHistory} from 'react-router-dom';
import styles from './DeployDialogs.module.scss';
import OneMessage from './OneMessage/OneMessage';
import FormMessage from './FormMessage/FormMessage';
import backIcons from '../../../../assets/images/message/back.svg';
import { addMessageType, dioalogsTypes } from '../../../../redux/types/message-reducer-types';

const { wrapper, back, wrapper_message } = styles;

interface Props {
	sendMessage: (message: string, penPalId: number) => addMessageType
	dialogs: dioalogsTypes[]
	authUserAvatar: string
	isMobaleView: any
}

interface MessagePropsType {
	authUser?: string[] 
	penPal?: string[]
}
const DeployDialogs: React.FC<Props>= ({sendMessage, dialogs, authUserAvatar, isMobaleView}) => {

// get pan pal id from url
	const {userId}: any = useParams();
	const history = useHistory();
// find needed pan pal in array with all pan pals - dialogs
	const penPal = dialogs.find(user => user.id === +userId ? user : null);
		
// in state every pan pals have messages array containing objects, but it's not from server
// like this: messages = [ {authUser: [someMessage1, someMessage2, ...]}, {panPal: [someMessage1, someMessage2, ...]}, ....]
	let arrMessagesElements;

	if(penPal){
		arrMessagesElements = penPal.messages.map((message: MessagePropsType) => 
			message.penPal 
				? message.penPal.map((message: string, index: number) =>
					<OneMessage key={index} text={message} pathImg={penPal.avatar}  id={penPal.id} isAuthUser={false}/>) 
				: message.authUser!.map((message: string, index: number) => 
					<OneMessage key={index} text={message} pathImg={authUserAvatar} id={''} isAuthUser={true}/>) );
	}

	return (
		<div className={wrapper}>
			<div>
				{isMobaleView.matches && <div className={back} onClick={()=> history.push('/messages')}><div><img src={backIcons} alt='back'/></div></div>}
				{
					arrMessagesElements 
						? <div className={wrapper_message}>{arrMessagesElements}</div> 
						: <div style={{padding: '10px'}}>Сhoose a user with whom you will correspond</div>
				}
			</div>
			{arrMessagesElements && <FormMessage sendMessage={sendMessage} penPalId={penPal && penPal.id}/>}
		</div>
	)
}

export default DeployDialogs;