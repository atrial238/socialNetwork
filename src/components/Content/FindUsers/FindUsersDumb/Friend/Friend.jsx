import React from 'react';
import { wrapper, avatarDiv, img, body, header, statuss, buttonClass } from './Friend.module.css'
import avatar from '../../../../../assets/images/1.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from '../../../../api/api';

const Friend = ({ data, onFollow, onUnfollow }) => {
	
	const {id, name, status, photos, followed } = data;

	const clickOnFollow = () => {
		usersAPI.follow(id)
			.then(res => !res.resultCode ? onFollow(id) : null)
	}

	const clickUnFollow = () => {
		usersAPI.unfollow(id)
			.then(res => !res.resultCode ? onUnfollow(id) : null)
	}

	const button = followed ? <button className={buttonClass} onClick={ clickUnFollow } >Unfollow</button>
									: <button className={buttonClass} onClick={ clickOnFollow } >Follow</button>;
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