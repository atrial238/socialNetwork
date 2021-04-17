import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import logo from '../../assets/images/logo1.png';
import logoutIcon from '../../assets/images/Header/logout.svg'
import placeholderAvatar from '../../assets/images/avatar/placeholder_avatar.jpg';
import {PropsHeader} from './HeaderContainer';

const {header, wrapper, img, imgAvatar, loginWrapper, 
			greetings, greetings_logout, wrapper_logo, greetings_name} = styles;

const Header: React.FC<PropsHeader> = ({login, avatar, logoutUser}) => {
	
	return (
		<header className={header}>
			<div className={wrapper}>
				<div className={wrapper_logo}>
					<div className={img}><NavLink to='/profile'><img src={logo}/></NavLink></div>
				</div>
				<Navigation />
				<div className={loginWrapper}>
					<div className={imgAvatar}>
						<img src={avatar || placeholderAvatar}/>
					</div>
					<div className={greetings}>
						<div className={greetings_name}>{`Hi, ${login} `}</div>
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
