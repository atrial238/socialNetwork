import React from 'react';
import styles from '../HeaderProfile.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import placeholderAvatar from '../../../../../assets/images/avatar/placeholder_avatar.jpg'

const {modal, modal_wrapper} = styles;

const Cover = ({avatar, open, handleClose}) => {

	return (
		<Modal
			className={modal_wrapper}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}> 
				<div className={modal} >
					<img  src={avatar || placeholderAvatar} alt="avatar"/>
				</div>
			</Fade>
		</Modal>
	)
}
export default Cover;