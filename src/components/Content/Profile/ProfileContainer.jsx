import React, { Component } from 'react';
import PostsContainer from './Posts/PostsContainer';
import DataUser from './DataUser/DataUser';
import style from './Profile.module.css';
import Cover from './Cover/Cover';
import { connect } from 'react-redux';
import { profileUserDataThunk, getUserStatusThunk,  putMyStatusOnServerThunk } from '../../../redux/profile-reducer'
import { Redirect, withRouter } from "react-router-dom";
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if(!userId && !this.props.authData.isAuth) {
			userId = this.props.authData.id
		};

		this.props.profileUserDataThunk (userId);
		this.props.getUserStatusThunk(userId);
	}

	render() {
		if(!this.props.match.params.userId && this.props.authData.isAuth) return <Redirect to='/login'/>
		return (
			<div>
				<Cover />
				<DataUser 
					profileUserData={this.props.profileUserData} 
					userStatus = {this.props.userStatus}
					putMyStatusOnServerThunk={ this.props.putMyStatusOnServerThunk}
				/>
				<PostsContainer />
			</div>
		)
	}
}

const mapStateToProps = (state) => (

	{ 
		profileUserData: state.profile.profileUserData,
		userStatus: state.profile.userStatus,
		authData: {id: state.auth.id, isAuth: state.auth.resultCode}
	});

export default compose(
	connect(mapStateToProps, { profileUserDataThunk, getUserStatusThunk, putMyStatusOnServerThunk}),
	withRouter,
	// WithAuthRedirect
)(ProfileContainer);

// connect = (mstp, mdtp) => {
// 	return (withRouter) => {
// 		const wrapper = (mstp, mdtp) => {
// 			return <withRouter {...mstp, ...mdtp}/>
// 		}
// 		return wrapper;
// 	}
// }
// withRouter = (props) => {
// 	const WithAuthRedirect = (ProfileContainer) => {
// 		return <ProfileContainer {...props}/>
// 	}
// 	return WithAuthRedirect
// }