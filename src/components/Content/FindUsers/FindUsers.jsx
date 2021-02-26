import React, {Component} from 'react';
import Friend from './Friend/Friend';
import {friends, button} from './FindUsers.module.css';
import * as axios from 'axios';

export default class FindUsers extends Component {
	constructor(props){
		super(props);
		
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(res => this.props.onSetUsers(res.data.items))

	}

	render(){
		
		const allFriends = this.props.friendsArrFinded.map(friend => 
			<Friend
				key={friend.id}
				data={friend}
				onFollow={this.props.onFollow}
				onUnfollow={this.props.onUnfollow} 
			/>
		);

		return(
			<>
				<h2>Users</h2>
				<div className={friends}>
					{allFriends}
				</div>
				<div className={button}><span onClick={this.someFunc}>Show more</span></div>
			</>
		)
	}
} 