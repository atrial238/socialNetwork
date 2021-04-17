import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { FORM_ERROR } from 'final-form';
import { loginUser, getCaptchaThunk, setAvatarSrcOnHeader } from '../../redux/auth-reucer';
import { getUserProfile } from '../../redux/profile-reducer';
import LoginSlider from './LoginSlider/LoginSlider';
import styles from './Login.module.scss';
import FormLogin from './FormLogin/FormLogin';
import { stateType } from '../../redux/store';

const { container, wrapper } = styles;

interface PropsStateType {
	isAuth: boolean
	captcha: string
}

interface PropsThunkType {
	loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => any
	getCaptchaThunk: () => any
	getUserProfile:  (userId: number) => any
	setAvatarSrcOnHeader:  (src: string) => void
}

interface PropsLoginType extends PropsStateType, PropsThunkType {}

interface FormType {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}
const Login: React.FC<PropsLoginType> = ({ isAuth, loginUser, getCaptchaThunk, captcha, getUserProfile, setAvatarSrcOnHeader }) => {

	const onSubmit = async (formData: FormType) => {
		const res = await loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)

		if (res && res.resultCode === 1) return { [FORM_ERROR]: 'Wrong password or email' }
		if (res && res.name === 'Error') return { [FORM_ERROR]: res.message }
		if (res && res.data.resultCode === 0) {
			getUserProfile(res.data.data.id)
				.then((res: any) => setAvatarSrcOnHeader(res.data.photos.small))
		}
	};

	const propsFormLogin = {
		onSubmit: onSubmit, 
		getCaptchaThunk: getCaptchaThunk, 
		captcha: captcha,
	}

	return isAuth ? <Redirect to='/profile' />
						: <div className={container}>
							<div className={wrapper}>
								<h1>Social Network</h1>
								<FormLogin {...propsFormLogin} />
							</div>
							<LoginSlider />
						</div>
}

const mapStateToProps = (state: stateType): PropsStateType => ({
	isAuth: state.auth.isAuth,
	captcha: state.auth.captcha,
});
export default connect(mapStateToProps, { loginUser, getCaptchaThunk, getUserProfile, setAvatarSrcOnHeader })(Login);