import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authMe } from '../../../redux/auth-reucer';
import FormWithReduxForm from './FormWithReduxForm';

const Login = ({isAuth, authMe}) => {
	
	const onSubmit = (formData) => {
		authMe(formData.email, formData.password, formData.rememberMe)
		
	}

	// if(isAuth) return <Redirect to='/profile'/>

	return (
		<div>
			<h2>This is a page of login</h2>
			<FormWithReduxForm onSubmit={onSubmit}/>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {isAuth: state.auth.resultCode}
}
export default connect(mapStateToProps, {authMe})(Login);