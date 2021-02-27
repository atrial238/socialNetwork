import { onFollow, onUnfollow, onSetUsers, setCurrentPage, setTotalCount, setLoadingAnimation} from "../../../redux/findUsers-reducer";
import { connect } from 'react-redux';
import FindUsersSideEffect from './FindUsersSideEffect';


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
export default connect(mapStateToProps, mapDispatchToProps)(FindUsersSideEffect);

