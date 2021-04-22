import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import { sendMessage, getPenPals } from '../../../redux/message-reducer';
import { stateType } from '../../../redux/store';
import { addMessageType, dioalogsTypes } from '../../../redux/types/message-reducer-types';

interface PropsStateType {
	dialogs: dioalogsTypes[],
	authUserAvatar: string
}

interface PropsThunkType {
	sendMessage: (message: string, penPalId: number) => addMessageType
	getPenPals: (fakePenPal: number[]) => any
}

export type Props = PropsStateType & PropsThunkType;

const MessagesContainer = (props: Props) => <Messages {...props}/>

const mapStateToProps = (state: stateType) => ({
	dialogs: state.messages.dialogs,
	authUserAvatar: state.auth.avatar
});

export default connect<PropsStateType, PropsThunkType, Props, stateType>(mapStateToProps, {sendMessage, getPenPals})(MessagesContainer);