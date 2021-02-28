import React from 'react';
import { wrapper, avatarDiv, img, body, header, statuss, buttonClass } from './Friend.module.css'
import avatar from '../../../../../assets/images/1.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Friend = ({ data, onFollow, onUnfollow }) => {
	
	const {id, name, status, photos, followed } = data;

	const clickOnFollow = () => {
		const settingsObj = {
			headers: {'API-KEY': '7a0e6aca-fbf9-433d-84b6-198a6c1f2d19'},
			withCredentials: true
		}
		axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {}, settingsObj)
			.then(res => !res.data.resultCode ? onFollow(id) : null)
	}
	const clickUnFollow = () => {
		console.log(1)
		const settingsObj = {
			headers: {'API-KEY': '7a0e6aca-fbf9-433d-84b6-198a6c1f2d19'},
			withCredentials: true
		}
		axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id, settingsObj)
			.then(res => !res.data.resultCode ? onUnfollow(id) : null)
	}

	const button = followed ? <div className={buttonClass} onClick={ clickUnFollow } >Unfollow</div>
									: <div className={buttonClass} onClick={ clickOnFollow } >Follow</div>;
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