import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const WithAuthRedirect = (Component) => {

	const wrapper = (props) => {
		if(props.isAuth) return <Redirect to='/login'/>
		return <Component {...props}/>
	}
	const mapStateToProps = (state) => ({isAuth: state.auth.resultCode});

	return connect(mapStateToProps)(wrapper);
}

export default WithAuthRedirect;