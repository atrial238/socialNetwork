import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import { sendMessage, getPenPals } from '../../../redux/message-reducer';

const MessagesContainer = props => <Messages {...props}/>

const mapStateToProps = state => ({
	messages: state.messages.arrMessages, 
	dialogs: state.messages.dialogs,
	authUserAvatar: state.auth.avatar
});

export default connect(mapStateToProps, {sendMessage, getPenPals})(MessagesContainer);