import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import { changeGlobalStateMessageActionCreator, sendMessageActionCreator } from '../../../redux/message-reducer';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

const MessagesContainer = (props) => {
	
	
	return <Messages {...props}/>
}
const mapStateToProps = (state) => ({messages: state.messages});

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage(){ dispatch(sendMessageActionCreator())},
		changeGlobalStateMessage(value) {dispatch(changeGlobalStateMessageActionCreator(value))}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect
)(MessagesContainer);