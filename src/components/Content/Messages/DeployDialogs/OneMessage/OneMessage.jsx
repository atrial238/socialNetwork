import React from 'react';
import { NavLink } from 'react-router-dom';
import {wrapper, body_message, avatar, auth_user_style, avatar_wrapper}from './OneMessage.module.scss';
import placeHolderAvatar from '../../../../../assets/images/avatar/placeholder_avatar.jpg';

const OneMessage = ({text, pathImg, isAuthUser, id}) => {
	
	return (
		<div className={`${wrapper} ${(isAuthUser && auth_user_style) || ''}`}>
			<div className={avatar}>
				<NavLink to={'/profile/' + id}>
					<div className={avatar_wrapper}><img src={pathImg || placeHolderAvatar}/></div>
				</NavLink>
				
			</div>
			<div className={body_message}><span>{text}</span></div>
		</div>
	)
}

export default OneMessage;