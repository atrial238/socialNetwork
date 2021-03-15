import React, {useEffect} from 'react';
import Posts from './Posts/Posts';
import DataUser from './DataUser/DataUser';
import Cover from './Cover/Cover';
import { connect } from 'react-redux';
import { profileUserDataThunk, getUserStatusThunk,  putMyStatusOnServerThunk, postMesssgeActioncreator, changeAvatarThunk} from '../../../redux/profile-reducer'
import { Redirect, withRouter } from "react-router-dom";
import WithAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainerWithHook = props =>{

	useEffect(() => {

		let userId = props.match.params.userId;
		if(!userId && !props.authData.isAuth) userId = props.authData.id;
		props.profileUserDataThunk (userId);
		props.getUserStatusThunk(userId);

	}, [props.match.params.userId]);

	const {profileUserData, userStatus, putMyStatusOnServerThunk, postData, postMesssgeActioncreator, changeAvatarThunk} = props;

	if(!props.match.params.userId && props.authData.isAuth) return <Redirect to='/login'/>

	return (
		<div>
			<Cover />
			<DataUser 
				profileUserData={profileUserData} 
				userStatus = {userStatus}
				userIdInUrl={props.match.params.userId}
				putMyStatusOnServerThunk={putMyStatusOnServerThunk}
				changeAvatarThunk={changeAvatarThunk}
			/>
			<Posts postData={postData} postMesssgeActioncreator={postMesssgeActioncreator}/>
		</div>
	)
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
	connect(mapStateToProps, {profileUserDataThunk, getUserStatusThunk, putMyStatusOnServerThunk, postMesssgeActioncreator, changeAvatarThunk}),
	withRouter,
	// WithAuthRedirect
)(ProfileContainerWithHook);