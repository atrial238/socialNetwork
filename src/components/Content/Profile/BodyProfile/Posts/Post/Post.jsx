import React from 'react';
import {wrapper, avatar_img, message, like_style, userName, header, header_wrapper, date_style} from './Post.module.scss';
import palaceHolderAvatar from '../../../../../../assets/images/avatar/placeholder_avatar.jpg';
import {getMonthString} from '../../../../../../util/getMonthString';

const Post = ({like, text, fullName, photo, date}) => {
	
	return (
		<div className={wrapper}>
			<div className={header}>
				<div className={avatar_img}><img src={photo || palaceHolderAvatar}/></div>
				<div className={header_wrapper}>
					<div className={userName}>{fullName}</div>
					<div className={date_style}>{`${getMonthString(date)} ${date.getDate()}, ${date.getFullYear()}`}</div>
				</div>
			</div>
			<div className={message}>{text}</div>
			<div className={like_style}>&#128151; {like}</div>
			
		</div>
	)
}
export default Post;