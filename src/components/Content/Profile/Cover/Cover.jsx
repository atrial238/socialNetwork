import React from 'react';
import {cover_img, gradient_bg, wrapper, avatar_style, avatar_change, avatar_wrapper} from './Cover.module.scss';
import ModalVeiwPictrue from './Modal/ModalVeiwPictrue/ModalVeiwPictrue';
import photoIcons from '../../../../assets/images/avatar/photo.svg';
import placeholder from '../../../../assets/images/placeholder.svg';

const Cover = ({updateAvatar, avatar,  isOwner}) => {
	
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const btnChangeAvatar = (
		<div className={avatar_change}>
			<label htmlFor="updateAvatar"><img src={photoIcons}/></label>
			<input id='updateAvatar' onChange={(e)=>updateAvatar(e.target.files[0])} type='file'/>
		</div>
	)

	return (
		<div className={wrapper}>
			<div className={cover_img}>
				<img src='https://peakvisor.com/img/news/french-mountains.jpg'/>
				<div className={avatar_style}>
					
						<div className={avatar_wrapper}>
							<img  onClick={handleOpen} src={avatar || placeholder} alt="avatar"/>
						</div>

						<ModalVeiwPictrue avatar={avatar} open={open} handleClose={handleClose}/>

						{isOwner && btnChangeAvatar}
						
				</div>
			</div>
			<div className={gradient_bg}></div>
		</div>
	)
}
export default Cover;