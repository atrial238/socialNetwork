import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, active, avatar_style } from './DialogsItem.module.scss';

const DialogsItem = ({ name, id, avatar }) => {

	return (
		<li>
			<div className={avatar_style}><img src={avatar}/></div>
			<NavLink className={link} activeClassName={active} to={`/messages/${id}`}>{name}</NavLink>
		</li>
	)
}

export default DialogsItem;