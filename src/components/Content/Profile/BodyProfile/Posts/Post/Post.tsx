import React from 'react';
import styles from './Post.module.scss';
import palaceHolderAvatar from '../../../../../../assets/images/avatar/placeholder_avatar.jpg';
import {getMonthString} from '../../../../../../util/getMonthString';
import {LoadingProgressContent} from '../../../../../common/Loading/LoadingProgressContent/LoadingProgressContent';

const {wrapper, avatar_img, message, like_style, userName, header, header_wrapper, date_style} = styles;

interface PropsPostType {
	like: number
	text: string
	fullName: string
	photo: string
	date: Date
	isProfileUserUploading: boolean
}
const Post: React.FC<PropsPostType>= ({like, text, fullName, photo, date, isProfileUserUploading}) => {
	
	const preloadAvatar = (
		<LoadingProgressContent height={45} width={45}>
			<rect x="0" y="0" rx="22.5" ry="22.5" width="45" height="45" />
		</LoadingProgressContent>
	)

	return (
		<div className={wrapper}>
			<div className={header}>
				<div className={avatar_img}>
					{isProfileUserUploading ? preloadAvatar : <img src={photo || palaceHolderAvatar}/>}
				</div>
				<div className={header_wrapper}>
					<div className={userName}>{fullName}</div>
					<div className={date_style}>{`${getMonthString(date)} ${date.getDate()}, ${date.getFullYear()}`}</div>
				</div>
			</div>
			<div className={message}><span>{text}</span></div>
			<div className={like_style}>&#128151; {like}</div>
		</div>
	)
}
export default Post;