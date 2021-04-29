import React from 'react';
import placeholderAvatar from '../../../../../../assets/images/avatar/placeholder_avatar.jpg';
import ModalPost from './ModalPost/ModalPost';
import FormPost from './FormPost/FormPost';
import styles from './HeaderPost.module.scss';
import { sendPostType } from '../../../../../../redux/types/profile-reducer-types';

const {body, avatar, open_modal, wrapper} = styles;

interface PropsHeaderPostType {
	photo: string
	sendPost: (post: string) => sendPostType
}

export interface HandleCloseType {
	handleClose: () => void;
} 

const HeaderPost: React.FC<PropsHeaderPostType> = ({photo, sendPost})=> {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const onSubmit = (data: any) =>{ 
		handleClose();
		sendPost(data.post);
	};
	
	return (
		<div className={wrapper}>
			<div className={body}>
				<div className={avatar}><img src={photo || placeholderAvatar} alt=""/></div>
				<div className={open_modal} onClick={handleOpen}>What's in your mind?</div>
			</div>
			<ModalPost open={open} handleClose={handleClose}>
				<FormPost handleClose={handleClose} onSubmit={onSubmit}/>
			</ModalPost>
		</div>
	)
}
export default HeaderPost;

