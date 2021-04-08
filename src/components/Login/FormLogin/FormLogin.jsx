import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import RenderField from '../../common/RenderFormField/RenderFormField.jsx';
import Captcha from './Captcha/Captcha';
import {required} from '../../../util/validateForm';
import {field, field_checkbox, error} from './FormLogin.module.scss';

const FormLogin = ({onSubmit, captcha}) => {

	return (
		<Form onSubmit={onSubmit}>
			
			{({handleSubmit, submitError, submitting}) => (
				
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
							{props => (<RenderField {...props} />)}
						</Field>
					</div>

					<div className={field}>
						<Field 
							type="password" 
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

					{submitError && <div className={error + ' ' + field}>{submitError}</div>}

					<div className={field}>
						<button 
							type='submit' 
							disabled={submitting}
						>Enter
						</button>
					</div>
				</form>
			)} 
			
		</Form>
	)
} 
export default FormLogin;

RenderField.propTypes = {
	onSubmit: PropTypes.func,
	captcha: PropTypes.string
}