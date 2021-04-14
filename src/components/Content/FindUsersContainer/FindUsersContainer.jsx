import { connect } from 'react-redux';
import React, { Component } from 'react';
import FindUsers from './FindUsers/FindUsers';
import { getUsers} from "../../../redux/findUsers-reducer.ts";
import { getUsersSelecor } from "../../../redux/selectors/findUsersSelecotr";


class FindUsersContainer extends Component {

	componentDidMount = () => this.props.getUsers(1, this.props.friendPerPage);

	setPage = currentPage => this.props.getUsers(currentPage, this.props.friendPerPage);
	
	render = () => <FindUsers {...this.props} setPage={this.setPage} />;
}

const mapStateToProps = (state) => (
	{
		friendsArrFinded: getUsersSelecor(state),
		numberCurrentPage: state.findUsers.numberCurrentPage,
		friendPerPage: state.findUsers.friendPerPage,
		totalFriend: state.findUsers.totalFriend,
		isLoading: state.findUsers.isLoading,
		isUserLoadingFail: state.findUsers.isUserLoadingFail
	}
)

export default connect(mapStateToProps, {getUsers})(FindUsersContainer);

