import React from 'react';
import {wrapper, body_message, avatar, auth_user_style, avatar_wrapper}from './OneMessage.module.scss';

const OneMessage = ({text, pathImg, isAuthUser}) => {
	
	return (
		<div className={`${wrapper} ${(isAuthUser && auth_user_style) || ''}`}>
			<div className={avatar}>
				<div className={avatar_wrapper}><img src={pathImg}/></div>
			</div>
			<div className={body_message}>{text}</div>
		</div>
	)
}

export default OneMessage;