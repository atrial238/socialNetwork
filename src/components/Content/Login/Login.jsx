import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { authMe } from '../../../redux/auth-reucer';

const FormLogin = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="login" style={{marginRight: '10px'}}>Enter your login</label>
				<Field id='login' type="text" name='email' component='input'/>
			</div>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="password" style={{marginRight: '10px'}}>Enter password</label>
				<Field id='password' type="text" name='password' component='input'/>
			</div>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="checkbox" style={{marginRight: '10px'}}>remember me</label>
				<Field id='checkbox' type="checkbox" name='rememberMe' component='input'/>
			</div>
			<button type='submit' style={{cursor: 'pointer'}}>Submit</button>
		</form>
	)
} 

const FormWithReduxForm = reduxForm({form: 'login'})(FormLogin);

const Login = () => {
	const onSubmit = (formData) => {
		authMe(formData)
		console.log(formData)
	}
	return (
		<div>
			<h2>This is a page of login</h2>
			<FormWithReduxForm onSubmit={onSubmit}/>
		</div>
	)
}
export default Login;