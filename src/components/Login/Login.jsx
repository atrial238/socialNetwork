import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { FORM_ERROR } from 'final-form';
import { loginUser, getCaptchaThunk } from '../../redux/auth-reucer';
import LoginSlider from './LoginSlider/LoginSlider';
import {container, wrapper} from './Login.module.scss';
import FormLogin from './FormLogin/FormLogin';

const Login = ({ isAuth, loginUser, getCaptchaThunk, captcha }) => {
	
	const onSubmit = async (formData) => {
		const res = await loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
		if((res && res.resultCode) === 1) return { [FORM_ERROR]: 'Wrong password or email' }
		if(res && res.name === 'Error') return { [FORM_ERROR]: res.message }
	};

	return isAuth ? <Redirect to='/' />
					  : <div className={container}>
							<div className={wrapper}>
								<h1>Social Network</h1>
								<FormLogin onSubmit={onSubmit} getCaptchaThunk={getCaptchaThunk} captcha={captcha} />
							</div>
							<LoginSlider/>
						 </div>
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, captcha: state.auth.captcha });
export default connect(mapStateToProps, { loginUser, getCaptchaThunk })(Login);

Login.propTypes = {
	isAuth: PropTypes.bool,
	loginUser: PropTypes.func,
	getCaptchaThunk: PropTypes.func,
	captcha: PropTypes.string
}