import React, { useState, useEffect } from 'react';
import { status_user, status_user_owner, status_input, buttons_wrapper, 
				button, input_fade, button_fade, wrapper_input, loading_spinner } from './UserStatus.module.scss';
import LoadingSmall from '../../../../common/LoadingSmall/LoadingSmall';
import EditModeStatus from './EditModeStatus/EditModeStatus';

const UserStatus = ({ userStatus, updateStatus, isOwner }) => {

	useEffect(() => setStatus(userStatus), [userStatus]);

	const [isStatusEdit, setIsStatusEdit] = useState(false),
			[isStatusUpload, setIsStatusUpload] = useState(false),
			[temporaryStatus, setStatus] = useState(userStatus),
			[isError, setIsError] = useState(false);

	const activateEditMode = () => setIsStatusEdit(true);

	const deactivateEditMode = () => {
			setIsStatusUpload(true)
			updateStatus(temporaryStatus)
				.then(res => {
					if(res.name === 'Error'){
						setIsError(true)
						return new Promise((resolve) => setTimeout(() => resolve(), 3000))
							.then(() => setIsError(false))
					}
				})
				.then(() => setIsStatusUpload(false))
				.then(() => setIsStatusEdit(false))
	};
	
	const setTemporaryStatus = (e) => setStatus(e.currentTarget.value) 

	const dataEditMode = {
			temporaryStatus,
			setTemporaryStatus,
			isError, 
			isStatusUpload,
			deactivateEditMode,
			isStatusEdit,
			setIsStatusEdit };

	const status = (
			<div
				className={`${status_user} ${isOwner && status_user_owner}`}
				onClick={isOwner && activateEditMode}
			>
				{userStatus || 'No status'}
			</div>
	)
	return isStatusEdit ? <EditModeStatus {...dataEditMode}/> : status
}
export default UserStatus;