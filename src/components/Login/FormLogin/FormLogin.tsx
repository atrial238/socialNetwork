import React from 'react';
import { Form, Field } from 'react-final-form';
import RenderField from '../../common/RenderFormField/RenderFormField.jsx';
import Captcha from './Captcha/Captcha';
import {required} from '../../../util/validateForm';
import styles from './FormLogin.module.scss';
import { FormType } from '../Login.js';

const {field, field_checkbox, error} = styles;

interface PropsFormLoginType {
	onSubmit: (formData: FormType) => void, 
	captcha: string
}
const FormLogin: React.FC<PropsFormLoginType> = ({onSubmit, captcha}) => {

	return (
		<Form onSubmit={onSubmit} initialValues={{email: 'free@samuraijs.com', password: 'free'}}>
			
			{({handleSubmit, submitError, submitting}) => (
				
				<form onSubmit={handleSubmit}>

					<div className={field}>
						<Field 
							name='email'
							type="text" 
							typeTag='input' 
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
