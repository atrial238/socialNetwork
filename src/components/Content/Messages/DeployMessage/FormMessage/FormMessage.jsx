import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { formClass, column, textarea } from '../DeployMessage.module.css';
import {renderField} from '../../../../../util/renderFormField';
import {required, maxLength15} from '../../../../../util/validateForm';

const FormMessage = ({handleSubmit}) => {

	return (
		<form  className={formClass + ' ' + column} onSubmit={handleSubmit}>
			<Field className={textarea} type='text' name='message' typeTag='textarea' style='inline-block' component={renderField} validate={[required, maxLength15]}/>
			<button type='submit'>send</button>
		</form>
	)
}
export default reduxForm({form: 'messages'})(FormMessage);