import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField, required, maxLength15} from '../../common/util/rederFormField';
import {field, field_checkbox} from './Login.module.scss'
const FormLogin = (props) => {

	const styleInput = {display: 'inline-block'}
	
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={field}>
				<Field 
					id='login' 
					type="text" 
					lable='input' 
					name='email' 
					placeholder='Your email'
					style={styleInput}
					component={renderField} 
					validate={[required]}
				/>
			</div>
			<div className={field}>
				<Field 
					id='password'
					type="text" 
					name='password' 
					lable='input' 
					style={styleInput}
					placeholder='password'
					component={renderField} 
					validate={[required]}
				/>
			</div>
			<div className={field + ' ' + field_checkbox}>
				<Field id='checkbox' type="checkbox" name='rememberMe' component='input'/>
				<label htmlFor="checkbox">remember me</label>
			</div>
			
			{/* <img src={props.captcha}/>
			<div>
				<Field 
					type="text" 
					lable='input' 
					name='captcha' 
					style={styleInput}
					component={renderField} 
				/>
			</div> */}

			{/* <div className={field}>{props.error} </div> */}
			<div className={field}>
				<button type='submit' style={{cursor: 'pointer', backgroundColor: '#00B8FF', border: 'none'}}>Enter</button>
			</div>
		</form>
	)
} 
export default reduxForm({form: 'login'})(FormLogin);
