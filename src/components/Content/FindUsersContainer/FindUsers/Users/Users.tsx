import React from 'react';
import { NavLink } from 'react-router-dom';
import placeholderAvatar from '../../../../../assets/images/avatar/placeholder_avatar.jpg';
import styles from './Users.module.scss';
const { wrapper, img, body, header, status_style, fullname}  = styles;

type PropsUser = {
	id?: number
	name?: string
	status?: string
	photos?: {small: string, large: string}
	placeholder?: {
		loadingProgressAvatar: JSX.Element
		loadingProgressName: JSX.Element
	}
	isLoading: boolean
	key: number
}
const Users: React.FC<PropsUser> = ({id, name, status, photos, placeholder, isLoading}) => {

	const avatar = isLoading
								? placeholder!.loadingProgressAvatar
								: <img src={photos!.small === null ? placeholderAvatar : photos!.small} />;

	const nameStatus = isLoading
								? placeholder!.loadingProgressName
								: (<>
										<div className={fullname}>{name}</div>
										<div className={status_style}>{status === null ? 'status' : status }</div>
									</>)
	return (
		<>
			<div className={wrapper}>
				<NavLink to={`profile/${id}`}>
					<div className={img}>{avatar}</div>
				</NavLink>
				<div className={body}>
					<div className={header}>{nameStatus}</div>
				</div>
			</div>
		</>
	)
}
export default Users;