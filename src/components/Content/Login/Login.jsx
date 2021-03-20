import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authMe, getCaptchaThunk} from '../../../redux/auth-reucer';
import FormWithReduxForm from './FormWithReduxForm';

const Login = ({isAuth, authMe, getCaptchaThunk, captcha}) => {
	
	const onSubmit = (formData) => {
		authMe(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if(!isAuth) return <Redirect to='/'/>

	return (
		<div>
			<h2>This is a page of login</h2>
			<FormWithReduxForm onSubmit={onSubmit} getCaptchaThunk={getCaptchaThunk} captcha={captcha} />
		</div>
	)
}
const mapStateToProps = (state) => ({isAuth: state.auth.resultCode, captcha: state.auth.captcha});
export default connect(mapStateToProps, {authMe, getCaptchaThunk})(Login);
