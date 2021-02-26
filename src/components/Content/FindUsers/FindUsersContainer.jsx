import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../../redux/findUsers-reducer";
import {connect} from 'react-redux';
import FindUsers from './FindUsers';


const mapStateToProps = (state) => {

	return {
		friendsArrFinded: state.findUsers.users
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onFollow: (userId) => dispatch(followActionCreator(userId)),
		onUnfollow: (userId) => dispatch(unfollowActionCreator(userId)),
		onSetUsers: (userArr) => dispatch(setUsersActionCreator(userArr))
	}
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);
export default FindUsersContainer;

