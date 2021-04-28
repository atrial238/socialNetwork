import React, { useState, useEffect } from 'react';
import styles from './UserStatus.module.scss';
import EditModeStatus from './EditModeStatus/EditModeStatus';

const { status_user, status_user_owner} = styles;

interface PropsUserStatusType {
	userStatus: string
	updateStatus: (status: string) => any
	isOwner: boolean
}

const UserStatus: React.FC<PropsUserStatusType> = ({ userStatus, updateStatus, isOwner }) => {

// state
	const [isStatusEdit, setIsStatusEdit] = useState(false),
			[isStatusUpload, setIsStatusUpload] = useState(false),
			[temporaryStatus, setStatus] = useState(userStatus),
			[isError, setIsError] = useState(false);

	useEffect(() => setStatus(userStatus), [userStatus]);

	const activateEditMode = () => setIsStatusEdit(true),
			setTemporaryStatus = (e:any) => setStatus(e.currentTarget.value);

// post status to server and handle errors
	const deactivateEditMode = () => {
			setIsStatusUpload(true)
			updateStatus(temporaryStatus)
				.then((res: any) => {
					if(res.name === 'Error'){
						setIsError(true)
						return new Promise((resolve) => setTimeout((resolve) => resolve(), 3000))
							.then(() => setIsError(false))
					}
				})
				.then(() => setIsStatusUpload(false))
				.then(() => setIsStatusEdit(false))
	};

// props for edit mode status
	const dataEditMode = {
			temporaryStatus,
			setTemporaryStatus,
			isError, 
			isStatusUpload,
			deactivateEditMode,
			isStatusEdit,
			setIsStatusEdit 
		};

	const status = (
			<div
				className={`${status_user} ${isOwner && status_user_owner}`}
				onClick={isOwner ? activateEditMode : undefined}
			>
				{userStatus || "User didn't write status"}
			</div>
	)
	return isStatusEdit ? <EditModeStatus {...dataEditMode}/> : status
}
export default UserStatus;