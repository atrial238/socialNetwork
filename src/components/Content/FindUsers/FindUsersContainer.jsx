import { 
			getUsersThunk,
			setCurrentPageThunk,
			followThunk,
			unfollowThunk
		} from "../../../redux/findUsers-reducer";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import FindUsersDumb from './FindUsersDumb/FindUsersDumb';;

class FindUsersContainer extends Component {

	componentDidMount() {
		this.props.getUsersThunk(null, this.props.friendPerPage)
	}

	setPage = (currentPage) => {
		this.props.setCurrentPageThunk(currentPage, this.props.friendPerPage);
	}
	
	render() {

		const { 
			friendsArrFinded,
			numberCurrentPage,
			friendPerPage,
			totalFriend,
			isLoading,
			followThunk,
			unfollowThunk
		} = this.props;

		const data = {
			friendsArrFinded,
			numberCurrentPage,
			friendPerPage,
			totalFriend,
			isLoading,
			followThunk,
			unfollowThunk,
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
	getUsersThunk,
	setCurrentPageThunk,
	followThunk,
	unfollowThunk
}
export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

