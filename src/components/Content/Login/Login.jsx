import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authMe, getCaptchaThunk} from '../../../redux/auth-reucer';
import FormWithReduxForm from './FormWithReduxForm';
import {container, imgBg} from './Login.module.scss'
import background from '../../../assets/images/bg_login_page/1.jpg';
import PropTypes from 'prop-types';

const Login = ({isAuth, authMe, getCaptchaThunk, captcha}) => {
	
	const onSubmit = (formData) => {
		authMe(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if(!isAuth) return <Redirect to='/'/>

	return (
		<div className={container}>
			<div>
				<h1>Social Network</h1>
				<FormWithReduxForm onSubmit={onSubmit} getCaptchaThunk={getCaptchaThunk} captcha={captcha}/>
			</div>
			<div className={imgBg}><img src={background} alt="background"/></div>
		</div>
	)
}
const mapStateToProps = (state) => ({isAuth: state.auth.resultCode, captcha: state.auth.captcha});
export default connect(mapStateToProps, {authMe, getCaptchaThunk})(Login);

Login.propTypes = {
	isAuth: PropTypes.number
}