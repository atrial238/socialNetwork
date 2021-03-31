import React, {useEffect}from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import { wrapper, some } from './Dialogs.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const Dialogs = ({dialogs, getPenPals}) => {
	
	const dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />)
	
	return (
		<Scrollbars className={some} style={{ width: 310, height: 100}}>
			<div className={wrapper}>
				<ul>
					{dialogsElement}
				</ul>
			</div>
		</Scrollbars>
	)
}

export default Dialogs;