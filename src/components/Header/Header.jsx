import React from 'react';
import {header, wrapper, img, imgAvatar, loginWrapper}  from './Header.module.css';

const Header = (props) => {
	const {resultCode, login, avatar} = props;

	const log = <span style={{cursor: 'pointer'}}>{resultCode ? 'Log In' : `Log Out`}</span>
	return (
		<header className={header}>
			<div className={wrapper}>
				<div className={img}>
					<img src='https://i.pinimg.com/564x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'/>
				</div>
				<div className={loginWrapper}>
					<div className={imgAvatar}><img src={avatar}/></div>
					{resultCode ? log : <span><span>{`Hi, ${login} `}</span><span>{log}</span></span>}
				</div>
			</div>
			
		</header>
	)
}
export default Header;
