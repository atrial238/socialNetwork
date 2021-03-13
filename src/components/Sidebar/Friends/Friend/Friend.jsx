import React from 'react';
import { NavLink } from 'react-router-dom';
import { friend, friend_img, friend_name } from './Friend.module.css';

const Friend = ({ src, name }) => {

	return (
		<NavLink to='somewhere' className={friend}>
			<div className={friend_img}>
				<img src={src} />
			</div>
			<div className={friend_name}>{name}</div>
		</NavLink>
	)
}
export default Friend;
