import React from 'react';
import { NavLink } from 'react-router-dom';
import  {nav, active, item} from './Navigation.module.css';



const Navigation = () => {
	return (
		<nav className={nav}>
			<div><NavLink className={item} activeClassName={active} to='/profile'>Profile</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/messages'>Messages</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/news'>News</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/music'>Music</NavLink></div>
			<div><NavLink className={item} activeClassName={active} to='/settings'>Settings</NavLink></div>
		</nav>
	)
}
export default Navigation;
