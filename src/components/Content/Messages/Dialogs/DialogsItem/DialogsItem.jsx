import React from 'react';
import { NavLink } from 'react-router-dom';
import { link, active, avatar_style} from './DialogsItem.module.scss';

const DialogsItem = ({ name, id, avatar }) => {

	return (
		<li>
			<NavLink className={link} activeClassName={active} to={`/messages/${id}`}>
				<div className={avatar_style}><img src={avatar}/><span>{name}</span></div>
			</NavLink>
		</li>
	)
}

export default DialogsItem;