import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogsItem.module.scss';

const { link, active, avatar_style} = styles;

interface PropsDialogsItemType {
	name: string
	id: number
	avatar: string
}
const DialogsItem: React.FC<PropsDialogsItemType> = ({ name, id, avatar }) => {

	return (
		<li>
			<NavLink className={link} activeClassName={active} to={`/messages/${id}`}>
				<div className={avatar_style}>
					<div><img src={avatar} alt='avatar'/></div>
					<span>{name}</span>
				</div>
			</NavLink>
		</li>
	)
}

export default DialogsItem;