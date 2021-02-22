import React from 'react';
import Friend from './Friend/Friend';
import { wrapper, title, friendsWrapper} from './Friends.module.css';

const Friends = ({friends}) => {

	const friendsElem = friends.map(friend => <Friend src={friend.src} name={friend.name}/>)

	return (
		<div className={wrapper}>
			<h4 className={title}>Friends</h4>
			<div className={friendsWrapper}>
				{friendsElem}
			</div>
		</div>
	)
}
export default Friends;
