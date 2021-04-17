import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import homeIcon from '../../../assets/images/navigation/home.svg';
import messageIcon from '../../../assets/images/navigation/messages.svg';
import findUsers from '../../../assets/images/navigation/findUsers.svg';

const {nav, active, link, img_wrapper} = styles;

const Navigation = () => {
	return (
		<nav className={nav}>

				<NavLink className={link} activeClassName={active} exact to='/profile'>
					<div className={img_wrapper}>
						<img src={homeIcon} alt=""/>
					</div>
				</NavLink>
			
				<NavLink className={link} activeClassName={active} to='/messages'>
					<div className={img_wrapper}>
						<img src={messageIcon} alt=""/>
					</div>
				</NavLink>
		
				<NavLink className={link} activeClassName={active} to='/findUsers'>
					<div className={img_wrapper}>
						<img src={findUsers} alt=""/>
					</div>
				</NavLink>

		</nav>
	)
}
export default Navigation;