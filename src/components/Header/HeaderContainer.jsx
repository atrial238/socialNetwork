import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthData} from '../../redux/auth-reucer';


class HeaderContainer extends React.Component {
	
	componentDidMount = () => this.props.getAuthData();

	render = () => <Header { ...this.props.userAuth }/> 
}
const mapStateToProps = (state) => ({userAuth: state.auth});

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);
