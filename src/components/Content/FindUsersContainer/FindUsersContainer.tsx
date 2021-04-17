import { connect } from 'react-redux';
import React, { Component } from 'react';
import FindUsers from './FindUsers/FindUsers';
import { getUsers} from "../../../redux/findUsers-reducer";
import { getUsersSelecor } from "../../../redux/selectors/findUsersSelecotr";
import {stateType} from '../../../redux/store';
import { userType } from '../../../redux/types/find-user-reducer-types';

export interface PropsStateType {
	friendsArrFinded: userType[] ,
	numberCurrentPage: number,
	friendPerPage: number,
	totalFriend: number,
	isLoading: boolean
	isUserLoadingFail: boolean
}

type PropsThunkType = {
	getUsers: (page: number, friendPerPage: number) => void
}

type Props = PropsThunkType & PropsStateType;


class FindUsersContainer extends Component<Props> {

	componentDidMount = () => this.props.getUsers(1, this.props.friendPerPage);

	setPage = (currentPage: number) => this.props.getUsers(currentPage, this.props.friendPerPage);
	
	render = () => <FindUsers {...this.props} setPage={this.setPage} />;
}

const mapStateToProps = (state:stateType): PropsStateType => (
	{
		friendsArrFinded: getUsersSelecor(state),
		numberCurrentPage: state.findUsers.numberCurrentPage,
		friendPerPage: state.findUsers.friendPerPage,
		totalFriend: state.findUsers.totalFriend,
		isLoading: state.findUsers.isLoading,
		isUserLoadingFail: state.findUsers.isUserLoadingFail
	}
)

export default connect<PropsStateType, {}, Props, stateType>(mapStateToProps, {getUsers})(FindUsersContainer);