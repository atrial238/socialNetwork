import React from 'react';
import {wrapper, item, avatar}from './OneMessage.module.scss';

const OneMessage = ({text, pathImg}) => {
	return (
		<div className={wrapper}>
			<div className={avatar}>
				<img src={pathImg}/>
			</div>
			<div className={item}>{text}</div>
		</div>
	)
}

export default OneMessage;