import React, {Component} from 'react';
import { connect } from 'react-redux';
import MyData from './MyData/MyData';
import {setDataProfile} from '../../../../redux/profile-reducer';
import * as axios from 'axios';

class MyDataContainer extends Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
			.then(res => {
				this.props.setDataProfile(res.data);
				}
			)
	}
	render(){
		return <MyData data={this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profile.profileUser
	}
}

export default connect(mapStateToProps, {setDataProfile})(MyDataContainer);