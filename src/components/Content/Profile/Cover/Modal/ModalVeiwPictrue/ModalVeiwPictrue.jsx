import React from 'react';
import {modal, modal_wrapper} from '../../Cover.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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
					<img  src={avatar} alt="avatar"/>
				</div>
			</Fade>
		</Modal>
	)
}
export default Cover;