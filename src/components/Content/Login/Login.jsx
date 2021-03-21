import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authMe, getCaptchaThunk } from '../../../redux/auth-reucer';
import PropTypes from 'prop-types';
import FormWithReduxForm from './FormLogin/FormLogin';
import LoginSlider from './LoginSlider/LoginSlider';
import { container } from './Login.module.scss'
import FormLogin from './FormLogin/FormLogin';

const Login = ({ isAuth, authMe, getCaptchaThunk, captcha }) => {
	
	const onSubmit = (formData) => authMe(formData.email, formData.password, formData.rememberMe, formData.captcha);

	return isAuth ? <Redirect to='/' />
					  : <div className={container}>
							<div>
								<h1>Social Network</h1>
								<FormLogin onSubmit={onSubmit} getCaptchaThunk={getCaptchaThunk} captcha={captcha} />
							</div>
							<LoginSlider/>
						 </div>
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, captcha: state.auth.captcha });
export default connect(mapStateToProps, { authMe, getCaptchaThunk })(Login);

Login.propTypes = {
	isAuth: PropTypes.bool,
	authMe: PropTypes.func,
	getCaptchaThunk: PropTypes.func,
	captcha: PropTypes.string
}