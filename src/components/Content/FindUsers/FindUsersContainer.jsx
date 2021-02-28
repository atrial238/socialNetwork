import { onFollow, 
			onUnfollow, 
			onSetUsers,
			setCurrentPage, 
			setTotalCount, 
			setLoadingAnimation,
			setButtonDisabled,
		} from "../../../redux/findUsers-reducer";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import FindUsersDumb from './FindUsersDumb/FindUsersDumb';
import {usersAPI} from '../../api/api';

class FindUsersContainer extends Component {

	componentDidMount() {
		usersAPI.getUsers(null, this.props.friendPerPage)
			.then(res => {
				this.props.setLoadingAnimation(false);
				this.props.onSetUsers(res.items);
				this.props.setTotalCount(res.totalCount);
				}
			)
	}
	setPage = (currentPage) => {
		this.props.setCurrentPage(currentPage);
		this.props.setLoadingAnimation(true);

		usersAPI.getUsers(currentPage, this.props.friendPerPage)
			.then(res => {
				this.props.setLoadingAnimation(false)
				this.props.onSetUsers(res.items)
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
			isLoading,
			setButtonDisabled
		} = this.props;

		const data = {
			friendsArrFinded,
			onFollow,
			onUnfollow,
			numberCurrentPage,
			friendPerPage,
			totalFriend,
			isLoading,
			setButtonDisabled,
			setPage: this.setPage
		}
		
		return <FindUsersDumb data={data}/>
	} 
}
const mapStateToProps = (state) => {

	return {
		friendsArrFinded: state.findUsers.users,
		numberCurrentPage: state.findUsers.numberCurrentPage,
		friendPerPage: state.findUsers.friendPerPage,
		totalFriend: state.findUsers.totalFriend,
		isLoading: state.findUsers.isLoading
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onFollow: (userId) => dispatch(followActionCreator(userId)),
// 		onUnfollow: (userId) => dispatch(unfollowActionCreator(userId)),
// 		onSetUsers: (userArr) => dispatch(setUsersActionCreator(userArr)),
// 		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
// 		setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
// 		setLoadingAnimation: (isLoad) => dispatch(setLoadingAnimationAC(isLoad))
// 	}
// }
const mapDispatchToProps = {
	onFollow,
	onUnfollow,
	onSetUsers,
	setCurrentPage,
	setTotalCount,
	setLoadingAnimation,
	setButtonDisabled
}
export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

