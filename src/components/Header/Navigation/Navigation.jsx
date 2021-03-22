import React from 'react';
import { NavLink } from 'react-router-dom';
import {nav, active, item} from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={nav}>
			<div><NavLink className={item} activeClassName={active} to='/profile'>Profile</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/messages'>Messages</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/findUsers'>Find users</NavLink></div>
		</nav>
	)
}
export default Navigation;