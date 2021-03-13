import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import { title, wrapper } from './Dialogs.module.css';

const Dialogs = ({dialogs}) => {

	const dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} path={dialog.path} />)
	
	return (
		<div className={wrapper}>
			<h4 className={title}>Dialogs</h4>
			<ul>
				{dialogsElement}
			</ul>
		</div>
	)
}

export default Dialogs;