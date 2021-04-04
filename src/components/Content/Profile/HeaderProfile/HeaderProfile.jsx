import React from 'react';
import ModalVeiwPictrue from './Modal/ModalVeiwPictrue';
import photoIcons from '../../../../assets/images/avatar/photo.svg';
import placeholder from '../../../../assets/images/placeholder.svg';
import LoadingSmall from '../../../common/LoadingSmall/LoadingSmall';
import placeholder_avatar from '../../../../assets/images/avatar/placeholder_avatar.jpg';
import NameUser from './NameUser/NameUser';
import {LoadingProgressContent} from '../../../common/Loading/LoadingProgressContent/LoadingProgressContent';
import {cover_img, gradient_bg, wrapper, avatar_container, btn_fade, preloader_name,
			avatar_change, button, avatar_wrapper, disable_btn, loading, upload_fail, error_occure,
			avatar_fade, updateAvatarFail, btn_follow,  btn_unfollow, wrapper_btn, upload_process} from './HeaderProfile.module.scss';

const HeaderProfile = props => {

// destructuring props
const {  updateAvatar, 
			avatar,
			isUserFollow,
			followUser,
			isProfileUserUploading,
			isProfileUserUploadFail,
			isUserStatusUploading,
			isUserStatusUploadFail,
			unfollowUser,
			userId,
			isUserFollowUploading,
			isUserFollowUploadFail,
			isOwner,
			isAvatarUploading,
			isErrorUpdateAvatar,
			...nameUserProps} = props;

// handle modal window for view full size avatar
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

// button for update avatar
	const btnChangeAvatar = (
		<div className={`${avatar_change} ${ isAvatarUploading && disable_btn }`} >
			<label htmlFor="updateAvatar"><img src={photoIcons}/></label>
			<input disabled={isAvatarUploading} id='updateAvatar' onChange={(e)=>updateAvatar(e.target.files[0])} type='file'/>
		</div>
	)

// props for button follow / unfollow user
	const btnUnfollowProps = {
			id:'fU',
			disabled: isUserFollowUploading,
			className: btn_unfollow,
			onClick: () => unfollowUser(userId)
		},
		btnFollowProps = {
			id:'fU',
			disabled: isUserFollowUploading,
			className: btn_follow,
			onClick: () => followUser(userId),
		} 

// button for follow / unfollow user
	const btnFollowUnfollow = (
		<div className={wrapper_btn}>
			<div className={button}>
				<label htmlFor="fU" className={isUserFollowUploading ? btn_fade : ''}></label>
				{isUserFollowUploading && <div className={upload_process}><LoadingSmall size={20} /></div>}
				{isUserFollowUploadFail && <div className={upload_fail}>Something went wrong</div>}
				{isUserFollow ? <button {...btnUnfollowProps}>Unfriend</button> : <button {...btnFollowProps}>Add Friend</button>}
			</div>
		</div>
	)

// make preloader
	const preloaderAvatar = (
		<LoadingProgressContent height={200} width={200}>
			<rect x="2.5" y="2.5" rx="100" ry="100" width="195" height="195" />
		</LoadingProgressContent>
	),
	preloaderName = (
		<div className={preloader_name}>
			<LoadingProgressContent height={70} width={250}>
				<rect x="0" y="0" rx="5" ry="5" width="250" height="30" />
				<rect x="25" y="50" rx="5" ry="5" width="200" height="20" />
			</LoadingProgressContent>
		</div>
	)
	
	return (
		<div className={wrapper}>
			<div className={cover_img}>
				<img src='https://peakvisor.com/img/news/french-mountains.jpg'/>

				<div className={avatar_container}>
						<div className={`${avatar_wrapper} ${isAvatarUploading && avatar_fade}`}>
							{ 
								isProfileUserUploading 
									? preloaderAvatar 
									: isProfileUserUploadFail 
									? <img src={placeholder_avatar} alt="avatar"/> 
									: <img onClick={handleOpen} src={avatar || placeholder_avatar} alt="avatar"/> 
							}
						</div>

						<ModalVeiwPictrue avatar={avatar} open={open} handleClose={handleClose}/>

						{isOwner && btnChangeAvatar}

						{isAvatarUploading && <div className={loading}><LoadingSmall/></div>}

						{isErrorUpdateAvatar && <div className={updateAvatarFail}>Update avatar failed</div>}
						
				</div>
				
			</div>
			<div className={gradient_bg}></div>
			{
				isProfileUserUploading && isUserStatusUploading 
					? preloaderName 
					: isProfileUserUploadFail || isUserStatusUploadFail
					? <div className={error_occure}>Can't fetch status or profile data</div>
					: <NameUser {...nameUserProps} isOwner={isOwner}/>
			}
			{!isOwner && btnFollowUnfollow}
		</div>
	)
}
export default HeaderProfile;