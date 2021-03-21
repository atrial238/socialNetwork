import React from 'react';
import { Form, Field } from 'react-final-form'
import RenderField from '../../../common/RenderFormField/RenderFormField.jsx';
import Captcha from './Captcha/Captcha';
import {required} from '../../../../util/validateForm';
import {field, field_checkbox} from '../Login.module.scss';

const FormLogin = ({onSubmit, captcha}) => {

	return (
		<Form onSubmit={onSubmit}>
			{({handleSubmit}) => (
				<form onSubmit={handleSubmit}>

					<div className={field}>
						<Field 
							name='email'
							type="text" 
							typeTag='input' 
							name='email' 
							placeholder='Your email'
							validate={required}
							errorMessage='Enter email'
						>
							{props => (<RenderField {...props}/>)}
						</Field>
					</div>

					<div className={field}>
						<Field 
							type="text" 
							name='password'
							typeTag='input'
							placeholder='password'
							errorMessage='Enter password'
							validate={required}
						>
							{props => (<RenderField {...props}/>)}
						</Field>
					</div>

					<div className={field + ' ' + field_checkbox}>
						<Field id='checkbox' type="checkbox" name='rememberMe' component='input'/>
						<label htmlFor="checkbox">remember me</label>
					</div>

					{captcha && <Captcha captcha={captcha}/>}

					<div className={field}>
						<button type='submit' style={{cursor: 'pointer', backgroundColor: '#00B8FF', border: 'none'}}>Enter</button>
					</div>
				</form>
			)}
			
		</Form>
	)
} 
export default FormLogin;
