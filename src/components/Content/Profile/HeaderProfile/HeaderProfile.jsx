import React from 'react';
import {cover_img, gradient_bg, wrapper, avatar_container, avatar_change, 
	avatar_wrapper, disable_btn, loading, avatar_fade, updateAvatarFail} from './HeaderProfile.module.scss';
import ModalVeiwPictrue from './Modal/ModalVeiwPictrue';
import photoIcons from '../../../../assets/images/avatar/photo.svg';
import placeholder from '../../../../assets/images/placeholder.svg';
import LoadingSmall from '../../../common/LoadingSmall/LoadingSmall';
import placeholder_avatar from '../../../../assets/images/avatar/placeholder_avatar.jpg';
import NameUser from './NameUser/NameUser';

const HeaderProfile = props => {
	const {updateAvatar, avatar,  isOwner, isAvatarUploading, isErrorUpdateAvatar, ...nameUserData} = props;

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const btnChangeAvatar = (
		<div className={`${avatar_change} ${ isAvatarUploading && disable_btn }`} >
			<label htmlFor="updateAvatar"><img src={photoIcons}/></label>
			<input disabled={isAvatarUploading} id='updateAvatar' onChange={(e)=>updateAvatar(e.target.files[0])} type='file'/>
		</div>
	)

	return (
		<div className={wrapper}>
			<div className={cover_img}>
				<img src='https://peakvisor.com/img/news/french-mountains.jpg'/>
				<div className={avatar_container}>
					
						<div className={`${avatar_wrapper} ${isAvatarUploading && avatar_fade}`}>
							<img  onClick={handleOpen} src={avatar || (isOwner && placeholder) || placeholder_avatar} alt="avatar"/>
						</div>

						<ModalVeiwPictrue avatar={avatar} open={open} handleClose={handleClose}/>

						{isOwner && btnChangeAvatar}

						{isAvatarUploading && <div className={loading}><LoadingSmall/></div>}

						{isErrorUpdateAvatar && <div className={updateAvatarFail}>Update avatar failed</div>}
						
				</div>
			</div>
			<div className={gradient_bg}></div>
			<NameUser {...nameUserData} isOwner={isOwner}/>
		</div>
	)
}
export default HeaderProfile;