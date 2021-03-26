import React from 'react';
import {modal, modal_wrapper} from './ModalChangeUserData.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Cover = ({open, handleClose, children}) => {

	return (
		<Modal
			className={modal_wrapper}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{timeout: 500}}
		>
			<Fade in={open}>{children}</Fade>
		</Modal>
	)
}
export default Cover;