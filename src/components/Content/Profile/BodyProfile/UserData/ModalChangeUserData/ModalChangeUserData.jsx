import React from 'react';
import {modal, modal_wrapper} from './ModalChangeUserData.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Cover = ({ open, handleClose}) => {

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
					
				</div>
			</Fade>
		</Modal>
	)
}
export default Cover;