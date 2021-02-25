import React from 'react';
import { changeGlobalStateMessageActionCreator, sendMessageActionCreator } from '../../../../redux/message-reducer';
import DeployMessage from './DeployMessage';
import GlobalContext from '../../../../context';
import {connect} from 'react-redux';

// const DeployMessageContainer = () => {
// 	return (
// 		<GlobalContext.Consumer>
// 			{
// 				(store) => {
// 					const {arrMessages, temporaryMessage} = store.getState().messages;
// 					const sendMessage = () => store.dispatch(sendMessageActionCreator());
// 					const changeGlobalStateMessage = (value) => store.dispatch(changeGlobalStateMessageActionCreator(value));
// 					return (
// 						<DeployMessage 
// 							arrMessages={arrMessages}
// 							temporaryMessage={temporaryMessage}
// 							sendMessage={sendMessage}
// 							changeGlobalStateMessage={changeGlobalStateMessage}
// 						/>
// 					)
// 				}
// 			}
// 		</GlobalContext.Consumer>
// 	)
// }
const mapStateToProps = (state) => {

	return {
		temporaryMessage: state.messages.temporaryMessage,
		arrMessages: state.messages.arrMessages
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage(){ dispatch(sendMessageActionCreator())},
		changeGlobalStateMessage(value) {dispatch(changeGlobalStateMessageActionCreator(value))}
	}
}
const DeployMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DeployMessage);
export default DeployMessageContainer;
