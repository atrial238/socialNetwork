import React from 'react';
import styles from './ModalChangeUserData.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const {modal_wrapper} = styles;

interface PropsModalUserDataTypes {
	open: boolean
	handleClose: any
	children: JSX.Element
}
const ModalChangeUserData: React.FC<PropsModalUserDataTypes> = ({open, handleClose, children}) => {

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
export default ModalChangeUserData;