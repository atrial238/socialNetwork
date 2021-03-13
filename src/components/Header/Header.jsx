import React from 'react';
import { NavLink } from 'react-router-dom';
import {header, wrapper, img, imgAvatar, loginWrapper}  from './Header.module.css';

const Header = ({resultCode, login, avatar, logoutUser}) => {
	
	return (
		<header className={header}>
			<div className={wrapper}>
				<div className={img}>
			 		<img src='https://i.pinimg.com/564x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'/>
				</div>
				<div className={loginWrapper}>
					<div className={imgAvatar}>
						{!resultCode && <img src={avatar || 'https://thumbs.dreamstime.com/b/%D1%87%D0%B5-%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D0%BE%D0%BF-%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8-%D1%8F-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B1%D0%BE%D1%80%D0%BE-%D1%8B-%D0%B3%D0%B0%D1%8F-%D1%88%D0%B0%D1%80%D0%B6%D0%B0-82677078.jpg'}/>}
					</div>
					{resultCode 
								? <NavLink to='/login'>Login</NavLink>
								: <span>
										<span>{`Hi, ${login} `}</span>
										<span style={{cursor: 'pointer'}} onClick={() => logoutUser()}>Logout</span>
									</span>
					}
				</div>
			</div>
		</header>
	)
}
export default Header;