import React, {useEffect}from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import { wrapper } from './Dialogs.module.scss';

const Dialogs = ({dialogs, getPenPals}) => {
	


	

	const dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />)
	
	return (
		<div className={wrapper}>
			<ul>
				{dialogsElement}
			</ul>
		</div>
	)
}

export default Dialogs;