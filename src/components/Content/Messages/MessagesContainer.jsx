import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import { sendMessageActionCreator } from '../../../redux/message-reducer';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

const MessagesContainer = (props) => <Messages {...props}/>
const mapStateToProps = (state) => ({messages: state.messages});


export default compose(
	connect(mapStateToProps, {sendMessageActionCreator}),
	WithAuthRedirect
)(MessagesContainer);