import React from 'react';
import { wrapper, avatarDiv, img, body, header, statuss, buttonClass } from './Friend.module.css'
import avatar from '../../../../../assets/images/1.jpg';
import { NavLink } from 'react-router-dom';

const Friend = ({ data, onFollow, onUnfollow }) => {
	
	const {id, name, status, photos, followed } = data;

	const button = followed ? <div className={buttonClass} onClick={() => onUnfollow(id) } >Unfollow</div>
									: <div className={buttonClass} onClick={() => onFollow(id)} >Follow</div>;
	return (
		<>
			<div className={wrapper}>
				<div className={avatarDiv}>
					<NavLink to={`profile/${id}`}>
						<div className={img}><img src={photos.small === null ? avatar : photos.small } /></div>
					</NavLink>
						{button}
				</div>
				<div className={body}>
					<div className={header}>
						<div>{name}</div>
						<div>{}</div>
					</div>
					<div className={statuss}>{status === null ? 'no data' : status }</div>
				</div>
			</div>
		</>
	)
}
export default Friend;