import React from 'react';
import UserStatus from './UserStatus/UserStatus';
import style from './NameUser.module.scss';

const {wrapper, name_user} = style;

interface PropsNameUserType {
	nameUser: string
	userStatus: string
	updateStatus: Function
	isOwner: boolean
}
const NameUser: React.FC<PropsNameUserType> = ({nameUser, ...userStatusProps}) => {

	return (
		<div className={wrapper}>
			<h2 className={name_user}>{nameUser}</h2>
			<UserStatus {...userStatusProps}/>
		</div>
	)
}
export default NameUser;