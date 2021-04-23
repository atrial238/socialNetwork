import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import styles from './Dialogs.module.scss';
import {LoadingProgressContent} from '../../../common/Loading/LoadingProgressContent/LoadingProgressContent';
import { dioalogsTypes } from '../../../../redux/types/message-reducer-types';

const { wrapper } = styles;

interface PropsDialogsType {
	dialogs: dioalogsTypes[]
	isPenPalLoading: boolean
	isPenPalLoadingFail: boolean
}
const Dialogs: React.FC<PropsDialogsType> = ({dialogs, isPenPalLoading, isPenPalLoadingFail}) => {
	
	const dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar} />)
	
	const loadingProgress = (
		<LoadingProgressContent height={200}>
			<rect x="0" y="0" rx="25" ry="25" width="50" height="50" />
			<rect x="60" y="15" rx="10" ry="10" width="220" height="20" />
			<rect x="0" y="60" rx="25" ry="25" width="50" height="50" />
			<rect x="60" y="75" rx="10" ry="10" width="220" height="20" />
			<rect x="0" y="120" rx="25" ry="25" width="50" height="50" />
			<rect x="60" y="135" rx="10" ry="10" width="220" height="20" />
		</LoadingProgressContent>
	)

	return (
			<div className={wrapper}>
				<ul>
					{isPenPalLoading && loadingProgress || isPenPalLoadingFail && 'Something went wrong' || dialogsElement}
				</ul>
			</div>
	)
}

export default Dialogs;