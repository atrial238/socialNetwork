import { 
			getUsersThunk,
			followThunk,
			unfollowThunk
		} from "../../../redux/findUsers-reducer";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import FindUsersDumb from './FindUsersDumb/FindUsersDumb';
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import { getUsersSelecor } from "../../../redux/selectors/findUsersSelecotr";


class FindUsersContainer extends Component {

	componentDidMount = () => this.props.getUsersThunk(1, this.props.friendPerPage);

	setPage = currentPage => this.props.getUsersThunk(currentPage, this.props.friendPerPage);
	
	render = () => <FindUsersDumb {...this.props} setPage={this.setPage} />; 
} 

const mapStateToProps = (state) => {

	return {
		friendsArrFinded: getUsersSelecor(state),
		numberCurrentPage: state.findUsers.numberCurrentPage,
		friendPerPage: state.findUsers.friendPerPage,
		totalFriend: state.findUsers.totalFriend,
		isLoading: state.findUsers.isLoading,
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
	followThunk,
	unfollowThunk
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	// WithAuthRedirect
)(FindUsersContainer);

