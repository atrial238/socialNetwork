import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {header, wrapper, img, imgAvatar, loginWrapper, greetings, greetings_logout, wrapper_logo}  from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import logo from '../../assets/images/logo1.png';
import logoutIcon from '../../assets/images/Header/logout.svg'
import placeholderAvatar from '../../assets/images/avatar/placeholder_avatar.jpg'
const Header = ({login, avatar, logoutUser}) => {
	
	return (
		<header className={header}>
			<div className={wrapper}>
				<div className={wrapper_logo}>
					<NavLink to='/profile'><div className={img}><img src={logo}/></div></NavLink>
				</div>
				<Navigation/>
				<div className={loginWrapper}>
					<div className={imgAvatar}>
						<img src={avatar || placeholderAvatar}/>
					</div>
					<div className={greetings}>
						<div>{`Hi, ${login} `}</div>
						<div className={greetings_logout} onClick={() => logoutUser()}>
							<img src={logoutIcon} alt='logout'/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;

Header.propTypes = {
	login: PropTypes.string,
	avatar: PropTypes.string,
	logoutUser: PropTypes.func
}