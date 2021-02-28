import React, {Component} from 'react';
import PostsContainer from './Posts/PostsContainer';
import DataUser from './DataUser/DataUser';
import style from './Profile.module.css';
import Cover from './Cover/Cover';
import { connect } from 'react-redux';
import * as axios from 'axios'; 
import {setDataProfile }from '../../../redux/profile-reducer'

class Profile extends Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
			.then(res => this.props.setDataProfile(res.data))
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
export default connect(mapStateToProps, {setDataProfile})(Profile);
