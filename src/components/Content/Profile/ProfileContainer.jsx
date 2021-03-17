import React, { Component } from 'react';
import Posts from './Posts/Posts';
import DataUser from './DataUser/DataUser';
import Cover from './Cover/Cover';
import { connect } from 'react-redux';
import { profileUserDataThunk, getUserStatusThunk,  putMyStatusOnServerThunk, postMesssgeActioncreator, chabgeProfileDataThunk} from '../../../redux/profile-reducer'
import { Redirect, withRouter } from "react-router-dom";
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

	getUserData(){
		let userId = this.props.match.params.userId;
		if(!userId && !this.props.authData.isAuth) {
			userId = this.props.authData.id
			if(userId) this.props.history.push('/login')
		};
		this.props.profileUserDataThunk (userId);
		this.props.getUserStatusThunk(userId);
	}

	componentDidMount() {this.getUserData()};

	componentDidUpdate(prevProps){
		if(this.props.match.params.userId !== prevProps.match.params.userId) this.getUserData()
	}
	
	render() {
		// if(!this.props.match.params.userId && this.props.authData.isAuth) return <Redirect to='/login'/>

		const {profileUserData, userStatus, putMyStatusOnServerThunk, postData, postMesssgeActioncreator, chabgeProfileDataThunk} = this.props;
		return (
			<div>
				<Cover />
				<DataUser 
					profileUserData={profileUserData} 
					userStatus = {userStatus}
					putMyStatusOnServerThunk={putMyStatusOnServerThunk}
					chabgeProfileDataThunk={chabgeProfileDataThunk}
				/>
				<Posts postData={postData} postMesssgeActioncreator={postMesssgeActioncreator}/>
			</div>
		)
	}
}

const mapStateToProps = state => (
	{ 
		profileUserData: state.profile.profileUserData,
		userStatus: state.profile.userStatus,
		authData: {id: state.auth.id, isAuth: state.auth.resultCode},
		postData: state.profile.postData
	}
);

export default compose(
	connect(mapStateToProps, { profileUserDataThunk, getUserStatusThunk, putMyStatusOnServerThunk, postMesssgeActioncreator, chabgeProfileDataThunk}),
	withRouter,
	// WithAuthRedirect
)(ProfileContainer);
