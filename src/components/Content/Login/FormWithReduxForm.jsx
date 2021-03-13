import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField, required, maxLength15} from '../../common/util/validateInput';

const FormLogin = (props) => {

	const styleInput = {display: 'inline-block'}
	return (
		<form onSubmit={props.handleSubmit}>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="login" style={{marginRight: '10px'}}>Enter your login</label>
				<Field 
					id='login' 
					type="text" 
					lable='input' 
					name='email' 
					style={styleInput}
					component={renderField} 
					validate={[required]}
				/>
			</div>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="password" style={{marginRight: '10px'}}>Enter password</label>
				<Field 
					id='password'
					type="text" 
					name='password' 
					lable='input' 
					style={styleInput}
					component={renderField} 
					validate={[required]}
				/>
			</div>

			<div style={{marginBottom: '15px'}}>
				<label htmlFor="checkbox" style={{marginRight: '10px'}}>remember me</label>
				<Field id='checkbox' type="checkbox" name='rememberMe' component='input'/>
			</div>
			<div>{props.error} </div>
			<button type='submit' style={{cursor: 'pointer'}}>Submit</button>
		</form>
	)
} 

export default reduxForm({form: 'login'})(FormLogin);