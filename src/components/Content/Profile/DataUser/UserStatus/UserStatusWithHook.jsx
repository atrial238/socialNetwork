import React, {useState} from 'react';

 const UserStatusWithHook = ({userStatus, putMyStatusOnServerThunk}) => {
	
	const [isStatusEdit, setIsStatusEdit] = useState(false);
	const [temporaryStatus, setStatus] = useState(userStatus);
	
	const activateEditMode = () => setIsStatusEdit(!isStatusEdit);
	const deactivateEditMode = () => {
		setIsStatusEdit(!isStatusEdit)
		putMyStatusOnServerThunk(temporaryStatus)
	};
	const setTemporaryStatus = (e) => setStatus(e.currentTarget.value)


	return (
		isStatusEdit
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