import React from 'react';
import Friend from './Friend/Friend';
import {friends, button} from './FindUsers.module.css';
import * as axios from 'axios';

const FindUsers = ({friendsArrFinded, onFollow, onUnfollow, onSetUsers}) => {
	const someFunc = () => {
		if(friendsArrFinded.length === 0){
		
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(res => onSetUsers(res.data.items))
		// 	[
		// 	{
		// 		id: 1, 
		// 		fullName: 'Mykhail B', 
		// 		address: {country: 'Ukrain', city: 'kiev'},
		// 		description: 'I am so pretty', 
		// 		avatar: 'https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg', 
		// 		isFriend: true
		// 	},
		// 	{
		// 		id: 2, 
		// 		fullName: 'Andrew C', 
		// 		address: {country: 'United States', city: 'NewYourk'},
		// 		description: 'I am so pretty', 
		// 		avatar: 'https://i.pinimg.com/564x/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg', 
		// 		isFriend: false
		// 	},
		// 	{
		// 		id: 3, 
		// 		fullName: 'Nika Z', 
		// 		address: {country: 'Zimbabve', city: 'kuragua'},
		// 		description: 'I am so pretty', 
		// 		avatar: 'https://i.pinimg.com/564x/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg', 
		// 		isFriend: true
		// 	},
		// 	{
		// 		id: 4, 
		// 		fullName: 'Luba G', 
		// 		address: {country: 'Rossia', city: 'Moscov'},
		// 		description: 'I am so pretty', 
		// 		avatar: 'https://i.pinimg.com/564x/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg', 
		// 		isFriend: false
		// 	},
		// ]
		
		}
	}
	
	const allFriends = friendsArrFinded.map(friend => 
	<Friend
		key={friend.id}
		data={friend}
		onFollow={onFollow}
		onUnfollow={onUnfollow} 
	/>)
	return(
		<>
			<h2>Users</h2>
			<div className={friends}>
				{allFriends}
			</div>
			<div className={button}><span onClick={someFunc}>Show more</span></div>
		</>
	)
}


export default FindUsers;