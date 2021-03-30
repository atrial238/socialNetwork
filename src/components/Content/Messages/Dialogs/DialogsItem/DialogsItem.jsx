import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, active, avatar } from './DialogsItem.module.scss';

const DialogsItem = ({ name, id, path }) => {

	return (
		<li>
			<div className={avatar}><img src={path}/></div>
			<NavLink className={link} activeClassName={active} to={`/messages/${id}`}>{name}</NavLink>
		</li>
	)
}

export default DialogsItem;