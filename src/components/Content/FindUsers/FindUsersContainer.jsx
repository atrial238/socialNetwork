import { onFollow, onUnfollow, onSetUsers, setCurrentPage, setTotalCount, setLoadingAnimation} from "../../../redux/findUsers-reducer";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as axios from 'axios';
import FindUsersDumb from './FindUsersDumb/FindUsersDumb';

class FindUsersContainer extends Component {

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
	setLoadingAnimation
}
export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

