import React, { Component } from 'react';
import * as axios from 'axios';
import FindUsersDumb from './FindUsersDumb/FindUsersDumb';

export default class FindUsersSideEffect extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.friendPerPage}`)
			.then(res => {
				this.props.setLoadingAnimation(false);
				this.props.onSetUsers(res.data.items);
				this.props.setTotalCount(res.data.totalCount);
				}
			)
	}
	setPage = (currentPage) => {
		this.props.setCurrentPage(currentPage);
		this.props.setLoadingAnimation(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.friendPerPage}`)
			.then(res => {
				this.props.setLoadingAnimation(false)
				this.props.onSetUsers(res.data.items)
			});
	}
	
	render() {

		const { 
			friendsArrFinded,
			onFollow,
			onUnfollow,
			numberCurrentPage,
			friendPerPage,
			totalFriend,
			isLoading
		} = this.props;

		const data = {
			friendsArrFinded,
			onFollow,
			onUnfollow,
			numberCurrentPage,
			friendPerPage,
			totalFriend,
			isLoading,
			setPage: this.setPage
		}
		
		return <FindUsersDumb data={data}/>
	} 
}