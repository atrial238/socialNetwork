import React from 'react';
import { wrapper, avatarDiv, img, body, header, statuss, buttonClass } from './Friend.module.css'
import avatar from '../../../../../assets/images/1.jpg';
import { NavLink } from 'react-router-dom';

const Friend = ({ data, followThunk, unfollowThunk }) => {

	const {id, name, status, photos, followed, isButtonDisable } = data;


	const button = followed ? <button disabled={isButtonDisable} className={buttonClass} onClick={ () => unfollowThunk(id) } >Unfollow</button>
									: <button disabled={isButtonDisable} className={buttonClass} onClick={ () => followThunk(id) } >Follow</button>;
	return (
		<>
			<div className={wrapper}>
				<div className={avatarDiv}>
					<NavLink to={`profile/${id}`}>
						<div className={img}><img src={photos.small === null ? avatar : photos.small} /></div>
					</NavLink>
						{button}
				</div>
				<div className={body}>
					<div className={header}>
						<div>{name}</div>
						<div>{}</div>
					</div>
					<div className={statuss}>{status === null ? 'no data' : status}</div>
				</div>
			</div>
		</>
	)
}
export default Friend;