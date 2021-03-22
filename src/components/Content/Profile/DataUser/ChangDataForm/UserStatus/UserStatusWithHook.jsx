import React, { useState, useEffect } from 'react';

const UserStatusWithHook = ({ userStatus, updateStatus }) => {

	const [isStatusEditMod, setIsStatusEditMod] = useState(false);
	const [temporaryStatus, setStatus] = useState(userStatus);

	useEffect(() => setStatus(userStatus), [userStatus]);

	const activateEditMode = () => setIsStatusEditMod(!isStatusEditMod);
	const deactivateEditMode = () => {
		setIsStatusEditMod(!isStatusEditMod)
		updateStatus(temporaryStatus)
	};
	const setTemporaryStatus = (e) => setStatus(e.currentTarget.value)

	return (
		isStatusEditMod
			? <input
				autoFocus
				type="text"
				onBlur={deactivateEditMode}
				onChange={setTemporaryStatus}
				value={temporaryStatus}
			/>
			: <div
				onDoubleClick={activateEditMode}
			>{userStatus || 'No status'}</div>
	)
}
export default UserStatusWithHook;