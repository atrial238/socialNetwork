import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData, serAvatarSrc} from '../../redux/auth-reucer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
			.then(res => {
				this.props.setAuthUserData(res.data)
				const userId = res.data.data.id;
				axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
					.then(res => this.props.serAvatarSrc(res.data.photos.small))
			});
	}
	render () {
		
		return <Header { ...this.props.userAuth }/>
	}
}
const mapStateToProps = (state) => ({userAuth: state.auth});

export default connect(mapStateToProps, {setAuthUserData, serAvatarSrc})(HeaderContainer);
