import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import { sendMessage } from '../../../redux/message-reducer';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

const MessagesContainer = props => <Messages {...props}/>

const mapStateToProps = state => ({
	messages: state.messages.arrMessages, 
	dialogs: state.messages.dialogs
});

export default connect(mapStateToProps, {sendMessage})(MessagesContainer);