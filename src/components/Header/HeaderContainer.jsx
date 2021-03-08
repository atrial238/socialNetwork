import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthData, logOutMe} from '../../redux/auth-reucer';


class HeaderContainer extends React.Component {
	


	render = () => <Header { ...this.props.userAuth} logOutMe={this.props.logOutMe}/> 
}
const mapStateToProps = (state) => ({userAuth: state.auth});

export default connect(mapStateToProps, {getAuthData, logOutMe})(HeaderContainer);
