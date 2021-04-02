import React from 'react';
import { NavLink } from 'react-router-dom';
import placeholderAvatar from '../../../../../assets/images/avatar/placeholder_avatar.jpg';
import { wrapper, img, body, header, status_style, fullname} from './Users.module.scss'

const Users = ({id, name, status, photos, placeholder, isLoading}) => {
	// const button = followed ? <button disabled={isButtonDisable} className={b uttonClass} onClick={ () => unfollow(id) } >Unfollow</button>
	// 								: <button disabled={isButtonDisable} className={buttonClass} onClick={ () => follow(id) } >Follow</button>;
	const avatar = isLoading
								? placeholder.loadingProgressAvatar
								: <img src={photos.small === null ? placeholderAvatar : photos.small} />;

	const nameStatus = isLoading
								? placeholder.loadingProgressName
								: (<>
										<div className={fullname}>{name}</div>
										<div className={status_style}>{status === null ? 'status' : status}</div>
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