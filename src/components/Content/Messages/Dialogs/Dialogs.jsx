import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import { wrapper, some } from './Dialogs.module.scss';
import {LoadingPenPal} from '../../../common/Loading/LoadingPenPal/LoadingPenPal' 

const Dialogs = ({dialogs, isPenPalLoading, isPenPalLoadingFail}) => {
	
	const dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />)
	
	return (
			<div className={wrapper}>
				<ul>
					{isPenPalLoading && <LoadingPenPal /> || isPenPalLoadingFail && 'Something went wrong' || dialogsElement}
				</ul>
			</div>
	)
}

export default Dialogs;