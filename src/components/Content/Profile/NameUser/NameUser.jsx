import React from 'react';
import UserStatus from './UserStatus/UserStatus';
import {wrapper, name_user} from './NameUser.module.scss';

const NameUser = ({nameUser, userStatus, updateStatus, isOwner}) => {

	 const dataUserStatus = {userStatus, updateStatus, isOwner}

	return (
		<div className={wrapper}>
			<h2 className={name_user}>{nameUser}</h2>
			<UserStatus  {...dataUserStatus}/>
		</div>
	)
}
export default NameUser;