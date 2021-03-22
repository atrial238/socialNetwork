import React from 'react';
import {cover_img, gradient_bg, wrapper} from './Cover.module.scss';

const Cover = () => {
	return (
		<div className={wrapper}>
			<div className={cover_img}>
				<img src='https://peakvisor.com/img/news/french-mountains.jpg'/>
			</div>
			<div className={gradient_bg}></div>
		</div>
	)
}
export default Cover;