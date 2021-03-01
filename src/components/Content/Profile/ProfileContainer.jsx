import React, {Component} from 'react';
import PostsContainer from './Posts/PostsContainer';
import DataUser from './DataUser/DataUser';
import style from './Profile.module.css';
import Cover from './Cover/Cover';
import { connect } from 'react-redux'; 
import {dataProfileThunk }from '../../../redux/profile-reducer'
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

	componentDidMount() {
		const userId = this.props.match.params.userId || 15300;
		this.props.dataProfileThunk(userId);
	}

	render(){
		return (
			<div>
				<Cover/>
				<DataUser profileData = {this.props.profileData}/>
				<PostsContainer/>
			 </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profileData: state.profile.profileUser
	}
}
export default connect(mapStateToProps, {dataProfileThunk})(withRouter(ProfileContainer));
