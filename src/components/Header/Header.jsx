import React from 'react';
import { NavLink } from 'react-router-dom';
import {header, wrapper, img, imgAvatar, loginWrapper}  from './Header.module.css';

const Header = (props) => {
	const {resultCode, login, avatar, logOutMe} = props;
	
	return (

		<header className={header}>
			<div className={wrapper}>
				<div className={img}>
			 		<img src='https://i.pinimg.com/564x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'/>
				</div>
				<div className={loginWrapper}>
					<div className={imgAvatar}>
						{!resultCode && <img src={avatar}/>}
					</div>
					{resultCode 
								? <NavLink to='/login'>Log In</NavLink>
								: <span>
										<span>{`Hi, ${login} `}</span>
										<span style={{cursor: 'pointer'}} onClick={() => logOutMe()}>Log Out</span>
									</span>
					}
				</div>
			</div>
		</header>
	)
}
export default Header;
